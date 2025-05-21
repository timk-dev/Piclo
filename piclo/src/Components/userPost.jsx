import styles from 'src/components/style.module.css';

import posts from "src/assets/posts.svg";
import pics from "src/assets/pictures.svg";
import heart from "src/assets/heart.svg";
import hearted from "src/assets/hearted.svg";
import heartwhite from "src/assets/heartwhite.svg";
import repost from "src/assets/repost.svg";
import reposted from "src/assets/reposted.svg";
import repostwhite from "src/assets/repostwhite.svg";
import book from "src/assets/bookmark.svg";
import comment from "src/assets/comment.svg";
import commentwhite from "src/assets/commentwhite.svg";

import { Avatar } from 'primereact/avatar';

import Hashtags from 'react-highlight-hashtags';

import React, { useState, useEffect } from "react";
import classNames from 'classnames';

import { useLocation } from 'react-router-dom';

import { DateTime } from "luxon";

const UserPost = ({loginId, bearToken, userData, name, isTrue, isLikeTrue}) => {
    const location = useLocation();

    const [openComments, setOpenComments] = useState(true);
    const [giveRepost, setGiveRepost] = useState(false);
    const [openLikes, setOpenLikes] = useState(true);
    const [giveLikes, setGiveLikes] = useState(false);

    let databody = {
        "postId": userData._id
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(databody),
        headers: {
        'Content-Type': 'application/json',
        Authorization: bearToken
        }
    };

    const getLikePost = async () => {

		const url = `http://localhost:3001/api/like`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'Like Post');

        if (responseJson) {
			console.log(bearToken, 'Liked Successfully');
		}
        else{
            throw new Error(`HTTP error: Status ${response.status}`);
        }
    };

    function convert(input) {
        return DateTime.fromFormat(input, 'HH:mm').toFormat('h:mm a');
    }

    const likeClick = event => {
        // 👇️ toggle shown state
        setOpenLikes(current => !current);
        isLikeTrue(openLikes);
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const giveLikeClick = event => {
        // 👇️ toggle shown state
        setGiveLikes(true);
        getLikePost();
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const giveUnlikeClick = event => {
        // 👇️ toggle shown state
        setGiveLikes(false);
        getLikePost();
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const commentClick = event => {
        // 👇️ toggle shown state
        
        setOpenComments(current => !current);
        isTrue(openComments);
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const giveRepostClick = event => {
        // 👇️ toggle shown state
        setGiveRepost(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    console.log(userData._id, "id hget");

    return(
        <div className={styles.userPost}>
            <div className={styles.userAvatar}>
                <div className={styles.avatarRound}>
                    {/*
                    <Avatar 
                        className={styles.postAvatar}
                        image="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?t=st=1737173525~exp=1737177125~hmac=424387f915f10c1ebcf19b73d9e67a9e9cc765855447385f36161ebc4bac2e9d&w=740"
                        label="User avatar picture"
                        loading="lazy"
                        shape='circle' 
                        size="xlarge"
                    ></Avatar>
                    
                    <SlAvatar
                        className={styles.postAvatar}
                        image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                        label="User avatar picture"
                        loading="lazy"
                        shape="rounded"
                    />
                    */}

                    {name &&
                        <Avatar 
                            className={classNames(styles.roundIt)}
                            image={name && name.avatar ? name.avatar : null}
                            label={`${name.name}`.slice(0, 2)}
                            loading="lazy"
                            shape='circle' 
                        >
                        </Avatar> 
                    } 
                </div>
                {name && <p><span>{name.callsign}</span> @{name.name}</p>}
                {userData && <span className={styles.endStick}><strong>{convert(`${userData.createdAt}`.slice(11,16))}</strong> - <span>{`${userData.createdAt}`.slice(5,7)}/{`${userData.createdAt}`.slice(8,10)}/{`${userData.createdAt}`.slice(2,4)}</span></span>}
            </div>
            <div className={styles.postText}>
                {userData &&
                <p>
                    <Hashtags className={styles.hashtag}>
                        {userData.text}
                    </Hashtags>
                </p>
                } 
            </div>
            <div className={styles.interaction}>
                <section className={styles.interCont}>
                    <div className={styles.likeCont}>
                        {giveLikes ? (
                            <>
                            </>
                        ) :
                            <>
                                {userData.likes.filter(id => id === loginId) ?
                                    <p>red</p>
                                :   
                                <>
                                    <img onClick={giveUnlikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                    </img>
                                    <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heart} width='20px' height='17px' alt='Like Icon'>
                                    </img>
                                </>
                                }
                            </>
                        }
                        {userData && userData.likes ? <span onClick={likeClick}>{userData.likes.length}</span> : <span>--</span> }
                    </div>

                    <div onClick={commentClick} className={styles.commentCont}>
                        <img rel='preload preconnect' loading='lazy' src={comment} width='20px' height='17px' alt='Comment Icon'>
                        </img>
                        <span>0</span>
                    </div>
                    <div className={styles.rePostCont}>
                        {giveRepost ? (
                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                            </img>
                        ) :
                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repost} width='20px' height='17px' alt='Repost Icon'>
                            </img>
                        }
                        <span>2</span>
                    </div>
                </section>

                <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                </img>
            </div>
        </div>
    );
}

export default UserPost;