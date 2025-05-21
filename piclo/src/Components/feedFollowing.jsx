import styles from 'src/components/style.module.css';

import home from "src/assets/home.svg";
import post from "src/assets/postsblk.svg";
import pics from "src/assets/picturesblk.svg";
import notif from "src/assets/notif.svg";
import search from "src/assets/search.svg";
import inbox from "src/assets/inbox.svg";
import user from "src/assets/user.svg";
import heart from "src/assets/heart.svg";
import heartwhite from "src/assets/heartwhite.svg";
import hearted from "src/assets/hearted.svg";
import book from "src/assets/bookmark.svg";
import comment from "src/assets/comment.svg";
import commentwhite from "src/assets/commentwhite.svg";
import repost from "src/assets/repost.svg";
import repostwhite from "src/assets/repostwhite.svg";
import reposted from "src/assets/reposted.svg";
import logo from "src/assets/plogo.svg";

import React, { useState, useEffect } from "react";

import UserPost from 'components/userPost';
import UserImgPost from './userImgPost';

const FeedFollowing = ({bearToken, setParentState}) => {

    const [openComments, setOpenComments] = useState(false);
    const [openLikes, setOpenLikes] = useState(false);
    const [giveLikes, setGiveLikes] = useState(false);
    const [giveRepost, setGiveRepost] = useState(false);
    const [getPost, setGetPost] = useState("");
    const [getImgPost, setGetImgPost] = useState("");
    const [isImgorTxt, setIsImgorTxt] = useState(false);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: bearToken
        }
    };

    const getFollowingPost = async () => {

		const url = `http://localhost:3001/api/alpost`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'following Post');

        if (responseJson) {
			setGetPost(responseJson);
		}
    };

    const getFollowingImgPost = async () => {

		const url = `http://localhost:3001/api/alimgpost`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'following Image Post');

        if (responseJson) {
			setGetImgPost(responseJson);
		}
    };

    const getUserImgPost = async () => {

		const url = `http://localhost:3001/api/imgpost/6791a3c321afef3929e94f45`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'User Img Post');

        if (responseJson) {
			setGetImgPost(responseJson);
		}
    };

    useEffect(() => {
        getFollowingPost();
        getFollowingImgPost();
    }, []);


    const commentClick = event => {
        // 👇️ toggle shown state
        setOpenComments(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

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

    const giveRepostClick = event => {
        // 👇️ toggle shown state
        setGiveRepost(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const handleClick = () => {
        setParentState("element2");
    };

    const feedChangeClick = event => {
        // 👇️ toggle shown state
        setIsImgorTxt(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    console.log(getPost.authors && getPost.authors.filter(id => id._id === getPost.postContent[0].author), "pic", getImgPost)

    const img = getPost && getPost.postContent.sort(()=>Math.random()-0.5);
    const img2 = getImgPost && getImgPost.postContent.sort(()=>Math.random()-0.5);
    return(
        <main className={styles.feed}>
            <div className={styles.feedChange}>
                {isImgorTxt ?
                    <div>
                        <h2>Pics</h2>
                        <p onClick={feedChangeClick}>
                            <img rel='preload preconnect' loading='lazy' src={post} width='20px' height='20px' alt='Post Icon'>
                            </img>
                        </p>
                    </div>
                    :
                    <div>
                        <p onClick={feedChangeClick}>
                            <img rel='preload preconnect' loading='lazy' src={pics} width='20px' height='20px' alt='Pics Icon'>
                            </img>
                        </p>
                        <h2>Posts</h2>
                    </div>
                }
            </div>

            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    {/*<UserPost userData={getPost} />*/}

                    {getImgPost && isImgorTxt == true && getImgPost.postContent.map((content)=>{
                        return(
                            <UserImgPost isTrue={setOpenComments} isLikeTrue={setOpenLikes} userData={content} name={getImgPost.authors && getImgPost.authors.filter(id => id._id === content.author)[0]} />
                        );
                    })}

                    {getPost && isImgorTxt == false && getPost.postContent.map((content)=>{
                        console.log(getPost.authors && getPost.authors.filter(id => id._id === content.author), "pic2")

                        return(
                            <div className={styles.feedCont}>
                                <UserPost bearToken={bearToken} isTrue={setOpenComments} isLikeTrue={setOpenLikes} userData={content} name={getPost.authors && getPost.authors.filter(id => id._id === content.author)[0]} />
                            </div>
                        );
                    })}

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

export default FeedFollowing;