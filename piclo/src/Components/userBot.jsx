import styles from 'src/components/style.module.css';

import posts from "src/assets/posts.svg";
import user from "src/assets/user.svg";
import pics from "src/assets/pictures.svg";
import heart from "src/assets/heart.svg";
import hearted from "src/assets/hearted.svg";
import heartwhite from "src/assets/heartwhite.svg";
import repost from "src/assets/repost.svg";
import repostwhite from "src/assets/repostwhite.svg";
import book from "src/assets/bookmark.svg";
import comment from "src/assets/comment.svg";
import commentwhite from "src/assets/commentwhite.svg";

import { setBasePath } from 'https://esm.sh/@shoelace-style/shoelace@2.19.1/cdn/utilities/base-path';
// Set the base path for Shoelace assets
import SlTab from '@shoelace-style/shoelace/dist/react/tab/index.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/react/tab-group/index.js';
import SlTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel/index.js';

import { Avatar } from 'primereact/avatar';

import { HashLink } from 'react-router-hash-link';
import UserPost from './userPost';
import UserImgPost from './userImgPost';

import React, { useState, useEffect } from "react";
import classNames from 'classnames';

const UserBot = ({bearToken}) => {
    setBasePath('https://esm.sh/@shoelace-style/shoelace@2.19.1/dist/')

    const [activeElement, setActiveElement] = useState(null);
    const [openComments, setOpenComments] = useState(false);
    const [giveRepost, setGiveRepost] = useState(false);
    const [openLikes, setOpenLikes] = useState(false);
    const [giveLikes, setGiveLikes] = useState(false);
    const [username, setUsername] = useState(null);
    const [getImgPost, setGetPost] = useState("");
    const [getAllPost, setAllPost] = useState("");
    const [visible, setVisible] = useState(false);
    const [isFollow, setIsFollow] = useState(false);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: bearToken
        }
    };

    const getUserImagePost = async () => {

		const url = `http://localhost:3001/api/imgpost/author/${username && username.id}`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'User Image Post');

        if (responseJson) {
			setGetPost(responseJson);
		}
        else{
            throw new Error(`HTTP error: Status ${response.status}`);
        }
    };

    const getAllUserPosts = async () => {
		const url = `http://localhost:3001/api/post/author/${username && username.id}`;
		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'All Post');

        if (responseJson) {
			setAllPost(responseJson.reverse());
		}
        else{
            throw new Error(`HTTP error: Status ${response.status}`);
        }
    };

    React.useEffect(() => {
        const headers = { 'Authorization': bearToken }; // auth header with bearer token
        fetch("http://localhost:3001/api/user", {headers}, { credentials: "same-origin" })
        .then((res) => res.json())
        .then((username) => setUsername(username));
        getUserImagePost();
        getAllUserPosts();
    }, []);

    console.log(username);

    const likeClick = event => {
        // 👇️ toggle shown state
        setOpenLikes(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const giveLikeClick = event => {
        // 👇️ toggle shown state
        setGiveLikes(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const commentClick = event => {
        // 👇️ toggle shown state
        setOpenComments(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const giveRepostClick = event => {
        // 👇️ toggle shown state
        setGiveRepost(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const handleElementClick = (elementId) => {
        setActiveElement(elementId);
    };

    const isVisible = event => {
        // 👇️ toggle shown state
        setVisible(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const isFollowClick = event => {
        // 👇️ toggle shown state
        setIsFollow(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    return(
        <main className={styles.userBot}>
            {visible ?
                <div className={styles.showFollowers}>
                    <svg onClick={isVisible} xmlns="http://www.w3.org/2000/svg" className={styles.h5} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className={styles.showHeader}>
                        <h1>{username && username.name}</h1>

                        {isFollow ?
                            <div className={styles.showTab}>
                                <p onClick={isFollowClick}>Followers {username.followers.length}</p>
                                <p className={styles.activeTab}>Friended {username.friended.length}</p>
                            </div>
                            :
                            <div className={styles.showTab}>
                                <p className={styles.activeTab}>Followers {username.followers.length}</p>
                                <p onClick={isFollowClick}>Friended {username.friended.length}</p>
                            </div>
                        }
                    </div>
                    
                    {username && !isFollow ? username.followers.map((postId) => {
                                    
                        return(
                            <div className={styles.spaceFiller}>
                                <article>
                                    <div className={styles.avatarRound}>
                                
                                        <Avatar 
                                            className={classNames(styles.roundIt)}
                                            image={username && postId.avatar ? postId.avatar : ""}
                                            label={`${postId.name}`.slice(0, 2)}
                                            loading="lazy"
                                            shape='circle' 
                                        >
                                        </Avatar> 

                                    </div>

                                    <p><span>{postId.callsign}</span><br />@{postId.name}</p>
                                </article>
                            </div>
                        )
                    }): null}

                    {username && isFollow ? username.friended.map((postId) => {
                                    
                        return(
                            <div className={styles.spaceFiller}>
                                <article>
                                    <div className={styles.avatarRound}>
                                
                                        <Avatar 
                                            className={classNames(styles.roundIt)}
                                            image={username && postId.avatar ? postId.avatar : ""}
                                            label={`${postId.name}`.slice(0, 2)}
                                            loading="lazy"
                                            shape='circle' 
                                        >
                                        </Avatar> 

                                    </div>

                                    <p><span>{postId.callsign}</span><br />@{postId.name}</p>
                                </article>
                            </div>
                        )
                    }): null}
                </div>
                :
                null
            }
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.profileImgs}>
                        <div className={styles.coverImg}
                            style={{
                                background: "rgb(255,255,255)",
                                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%), url(${username && username.coverImage ? username.coverImage : null}), url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1736730076~exp=1736733676~hmac=92468f5602d884f1a3b805502c10e7c6bc471582925d102daaa67b9153042e77&w=1380')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className={styles.avatarRound}>
                                {/*<SlAvatar
                                    className={styles.roundIt}
                                    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                    label="User avatar picture"
                                    loading="lazy"
                                    shape="rounded"
                                />

                                <Avatar 
                                    className={classNames(styles.roundIt)}
                                    image="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?t=st=1737173525~exp=1737177125~hmac=424387f915f10c1ebcf19b73d9e67a9e9cc765855447385f36161ebc4bac2e9d&w=740"
                                    label="User avatar picture"
                                    loading="lazy"
                                    shape='circle' 
                                >
                                </Avatar> 
                                
                                */}

                                {username &&
                                <Avatar 
                                    className={classNames(styles.roundIt)}
                                    image={username && username.avatar ? username.avatar : null}
                                    label={`${username.name}`.slice(0, 2)}
                                    loading="lazy"
                                    shape='circle' 
                                >
                                </Avatar> 
                                } 

                            </div>
                            <div className={styles.profileDesc}>
                                {username && <p>@{username.name}</p>}
                                {username && <span>Joined {months[parseInt(`${username.createdAt}`.slice(5, 7) - 1)]}. {`${username.createdAt}`.slice(8,10)}, {`${username.createdAt}`.slice(0,4)}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={styles.friendCont}>
                        <div className={styles.frCount}>
                            {getAllPost ? <p >{getAllPost.length}</p> : <p>--</p> }
                            <p><strong>posts</strong></p>
                        </div>
                        <div className={styles.frCount}>
                            {getImgPost ? <p >{getImgPost.length}</p> : <p>--</p> }
                            <p><strong>pics</strong></p>
                        </div>
                        <div onClick={isVisible} className={styles.frCount}>
                            {username && username.followers ? <p >{username.followers.length}</p> : <p>--</p> }
                            <p><strong>followers</strong></p>
                        </div>
                        <div onClick={isVisible} className={styles.frCount}>
                            {username && username.friended ? <p >{username.friended.length}</p> : <p>--</p> }
                            <p><strong>friended</strong></p>
                        </div>
                    </div>

                    <div className={styles.bio}>
                        <div className={styles.buttonCont}>
                            <span className={styles.followBtn}>Edit Profile</span>
                            <span className={classNames(styles.followBtn, styles.followBtnAlt)}>Settings</span>
                        </div>

                        {username && <span><strong>{username.callsign}</strong></span>}
                        
                        {username && <p>{username.bio}</p>}
                    </div>

                    <div className={styles.media}>
                    <SlTabGroup className={styles.tabGroup} placement="top">
                        <SlTab className={styles.tabLi} slot="nav" panel="posts">
                            <div className={styles.tabUser}>
                                <img rel='preload preconnect' loading='lazy' src={posts} width='15px' height='15px' alt='Like Icon'>
                                </img>
                                <p>Posts</p>
                            </div>
                        </SlTab>
                        <SlTab className={styles.tabLi} slot="nav" panel="pictures">
                            <div className={styles.tabUser}>
                                <img rel='preload preconnect' loading='lazy' src={pics} width='15px' height='15px' alt='Like Icon'>
                                </img>
                                <p>Pictures</p>
                            </div>
                        </SlTab>
                        <SlTab className={styles.tabLi} slot="nav" panel="custom">
                            <div className={styles.tabUser}>
                                <img rel='preload preconnect' loading='lazy' src={repostwhite} width='15px' height='15px' alt='Like Icon'>
                                </img>
                                <p>Repost</p>
                            </div>
                        </SlTab>
                        <SlTab className={styles.tabLi} slot="nav" panel="advanced">
                            <div className={styles.tabUser}>
                                <img rel='preload preconnect' loading='lazy' src={heartwhite} width='15px' height='15px' alt='Like Icon'>
                                </img>
                                <p>Likes</p>
                            </div>
                        </SlTab>

                        <SlTabPanel className={styles.postHolder} name="posts">
                            {getAllPost && getAllPost.map((postId) => {
                                return(
                                    <UserPost isTrue={setOpenComments} isLikeTrue={setOpenLikes} userData={postId} name={username} />
                                )

                            })}

                            {getAllPost.length === 0 &&
                                <p className={styles.noContent}>They ain't saying nothing</p>
                            }
                        </SlTabPanel>
                        <SlTabPanel className={styles.animate} name="pictures">
                            <div className={styles.picCont}>
                                {getImgPost && getImgPost.map((postId) => {
                                    return(
                                        <img rel='preload preconnect' loading='lazy' src={postId.image} width='100%' height='100%' alt='User Icon'>
                                        </img>
                                    )
                                })}
                            </div>

                            <div className={styles.userPicScroll}>
                                {getImgPost && getImgPost.map((postId) => {
                                    return(
                                    <UserImgPost isTrue={setOpenComments} isLikeTrue={setOpenLikes} userData={postId} name={username} />
                                    )
                                })}
                            </div>
                            
                            {getImgPost.length === 0 &&
                                <p className={styles.noContent}>They might be ugly</p>
                            }
                        </SlTabPanel>
                        <SlTabPanel name="custom">Sorry, there are no repost.</SlTabPanel>
                        <SlTabPanel name="advanced">They don't like anything.</SlTabPanel>
                    </SlTabGroup>
                    </div>

                    <div className={styles.footerPadding}></div>

                </article>
            </section>

            {openComments ? (

            <section className={styles.commentSection}>
                <h2>Comments</h2>
                <div onClick={commentClick} className={styles.hideComments}></div>
                <article className={styles.commentTextCont}>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>Amy</span> @McKnightAmy65</p>
                            <span className={styles.endStick}>-46m ago</span>
                        </div>
                        <div className={styles.commentText}>
                            <p>
                                clap 4 me
                            </p>
                        </div>
                        <div className={styles.interaction}>
                            <section className={styles.interCont}>
                                <div className={styles.likeCont}>
                                    {giveLikes ? (
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    ) :
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heart} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    }
                                    <span onClick={likeClick}><strong>3</strong></span>
                                </div>

                                <div className={styles.commentCont}>
                                    <span><strong>Reply</strong></span>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>JennyfromAkins</span> @jennycraig</p>
                            <span className={styles.endStick}>-2wks ago</span>
                        </div>
                        <div>
                            <p className={styles.commentText}>
                                what is wrong wit yall???
                            </p>
                        </div>
                        <div className={styles.interaction}>
                            <section className={styles.interCont}>
                                <div className={styles.likeCont}>
                                    {giveLikes ? (
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    ) :
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heart} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    }
                                    <span onClick={likeClick}>27</span>
                                </div>

                                <div className={styles.commentCont}>
                                    <span><strong>Reply</strong></span>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>sleazyd</span> @sleazdoug</p>
                            <span className={styles.endStick}>-3d ago</span>
                        </div>
                        <div>
                            <p className={styles.commentText}>
                                you're an inspiration
                            </p>
                        </div>
                        <div className={styles.interaction}>
                            <section className={styles.interCont}>
                                <div className={styles.likeCont}>
                                    {giveLikes ? (
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    ) :
                                        <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heart} width='20px' height='17px' alt='Like Icon'>
                                        </img>
                                    }
                                    <span onClick={likeClick}>10</span>
                                </div>

                                <div className={styles.commentCont}>
                                    <span><strong>Reply</strong></span>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </section>

            ) : null }

            {openLikes ? (

            <section className={styles.commentSection}>
                <h2>Likes</h2>
                <div onClick={likeClick} className={styles.hideComments}></div>
                <article className={styles.likeTextCont}>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>Amy</span> @McKnightAmy65</p>
                            <span className={styles.followBtn}>+ Add Friend</span>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>JennyfromAkins</span> @jennycraig</p>
                            <span className={styles.followBtn}>+ Add Friend</span>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={user} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>sleazyd</span> @sleazdoug</p>
                            <span className={styles.followBtn}>+ Add Friend</span>
                        </div>
                    </div>
                </article>
            </section>

            ) : null }
        </main>
    );
}

export default UserBot;