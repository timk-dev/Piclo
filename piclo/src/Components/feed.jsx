import styles from 'src/components/style.module.css';

import home from "src/assets/home.svg";
import post from "src/assets/post.svg";
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

const Feed = ({bearToken, setParentState}) => {

    const [openComments, setOpenComments] = useState(false);
    const [openLikes, setOpenLikes] = useState(false);
    const [giveLikes, setGiveLikes] = useState(false);
    const [giveRepost, setGiveRepost] = useState(false);
    const [getPost, setGetPost] = useState("");
    const [getImgPost, setGetImgPost] = useState("");

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: bearToken
        }
    };

    const getUserPost = async () => {

		const url = `http://localhost:3001/api/post/678a862f7cc3f8454bb29a1f`;

		const response = await fetch(url, options, { credentials: "same-origin" });
		const responseJson = await response.json()

        console.log(responseJson, 'User Post');

        if (responseJson) {
			setGetPost(responseJson);
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
        getUserPost();
        getUserImgPost();
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

    return(
        <main className={styles.feed}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    {/*<UserPost userData={getPost} />*/}
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img onClick={handleClick} rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/5.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>Melz</span> @flyboiidotcom</p>
                            <span className={styles.endStick}>-2hr ago</span>
                        </div>
                        <div className={styles.postText}>
                            <p>
                                There needs to be at least ONE more Nightmare on Elm Street film so that Freddy can invade a comic book nerd’s dream, dress up as Deadpool, and refer to himself as “Fredpool.”                            
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
                                    <span onClick={likeClick}>43</span>
                                </div>

                                <div onClick={commentClick} className={styles.commentCont}>
                                    <img rel='preload preconnect' loading='lazy' src={comment} width='20px' height='17px' alt='Comment Icon'>
                                    </img>
                                    <span>5</span>
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

                    <div className={styles.userImgPost}>
                        <div className={styles.userAvatar}>
                            <img onClick={handleClick} rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/75.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>PicloAdmin</span> @picloadmin</p>
                            <span className={styles.endStick}>-01/10/25</span>
                        </div>

                        <div className={styles.imgCont}>
                            <img className={styles.postImg} rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-photo/medium-shot-woman-holding-smartphone_23-2150208249.jpg?t=st=1736887438~exp=1736891038~hmac=50578bcec7e15a282726bf828693b6517141c15e32e96b94fdf0b415405f1444&w=900"} width='100%' height='90%' alt='User Icon'>
                            </img>

                            <div className={styles.interaction}>
                                <section className={styles.interCont}>
                                    <div className={styles.likeCont}>
                                        {giveLikes ? (
                                            <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                            </img>
                                        ) :
                                            <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heartwhite} width='20px' height='17px' alt='Like Icon'>
                                            </img>
                                        }
                                        <span onClick={likeClick}>43</span>
                                    </div>

                                    <div onClick={commentClick} className={styles.commentCont}>
                                        <img rel='preload preconnect' loading='lazy' src={commentwhite} width='20px' height='17px' alt='Comment Icon'>
                                        </img>
                                        <span><strong>5</strong></span>
                                    </div>
                                    <div className={styles.rePostCont}>
                                        {giveRepost ? (
                                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                                            </img>
                                        ) :
                                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repostwhite} width='20px' height='17px' alt='Repost Icon'>
                                            </img>
                                        }
                                        <span>2</span>
                                    </div>
                                </section>
                                <section>
                                <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                                </img>
                                </section>
                            </div>
                        </div>

                        <div className={styles.caption}>
                            <p>
                                Welcome to Piclo!
                            </p>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img onClick={handleClick} rel='preload preconnect' loading='lazy' src={'https://randomuser.me/api/portraits/women/75.jpg'} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>mel</span> @memegodmel</p>
                            <span className={styles.endStick}>-1d ago</span>
                        </div>
                        <div className={styles.postText}>
                            <p>
                                I got atheist shooters they gone always blasphemy
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
                                    <span onClick={likeClick}>632</span>
                                </div>

                                <div onClick={commentClick} className={styles.commentCont}>
                                    <img rel='preload preconnect' loading='lazy' src={comment} width='20px' height='17px' alt='Comment Icon'>
                                    </img>
                                    <span>111</span>
                                </div>
                                <div className={styles.rePostCont}>
                                    {giveRepost ? (
                                        <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                                        </img>
                                    ) :
                                        <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repost} width='20px' height='17px' alt='Repost Icon'>
                                        </img>
                                    }
                                    <span>43</span>
                                </div>
                            </section>

                            <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                            </img>
                        </div>
                    </div>

                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img onClick={handleClick} rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/15.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>--</span> @{getPost.author}</p>
                            <span className={styles.endStick}>- {`${getPost.createdAt}`.slice(5,7)}/{`${getPost.createdAt}`.slice(8,10)}/{`${getPost.createdAt}`.slice(2,4)}</span>
                        </div>
                        <div className={styles.postText}>
                            <p>
                                {getPost.text}
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
                                    <span onClick={likeClick}>17k</span>
                                </div>

                                <div onClick={commentClick} className={styles.commentCont}>
                                    <img rel='preload preconnect' loading='lazy' src={comment} width='20px' height='17px' alt='Comment Icon'>
                                    </img>
                                    <span>45</span>
                                </div>
                                <div className={styles.rePostCont}>
                                    {giveRepost ? (
                                        <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                                        </img>
                                    ) :
                                        <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repost} width='20px' height='17px' alt='Repost Icon'>
                                        </img>
                                    }
                                    <span>50k</span>
                                </div>
                            </section>

                            <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                            </img>
                        </div>
                    </div>

                    <div className={styles.userImgPost}>
                        <div className={styles.userAvatar}>
                            <img onClick={handleClick} rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?t=st=1737173525~exp=1737177125~hmac=424387f915f10c1ebcf19b73d9e67a9e9cc765855447385f36161ebc4bac2e9d&w=740"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><span>{getImgPost.callsign }</span> @{getImgPost.author}</p>
                            <span className={styles.endStick}>- {`${getImgPost.createdAt}`.slice(5,7)}/{`${getImgPost.createdAt}`.slice(8,10)}/{`${getImgPost.createdAt}`.slice(2,4)}</span>
                        </div>

                        <div className={styles.imgCont}>
                            <img className={styles.postImg} rel='preload preconnect' loading='lazy' src={getImgPost.image} width='100%' height='100%' alt='User Icon'>
                            </img>

                            <div className={styles.interaction}>
                                <section className={styles.interCont}>
                                    <div className={styles.likeCont}>
                                        {giveLikes ? (
                                            <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                            </img>
                                        ) :
                                            <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heartwhite} width='20px' height='17px' alt='Like Icon'>
                                            </img>
                                        }
                                        <span onClick={likeClick}>12</span>
                                    </div>

                                    <div onClick={commentClick} className={styles.commentCont}>
                                        <img rel='preload preconnect' loading='lazy' src={commentwhite} width='20px' height='17px' alt='Comment Icon'>
                                        </img>
                                        <span><strong>2</strong></span>
                                    </div>
                                    <div className={styles.rePostCont}>
                                        {giveRepost ? (
                                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                                            </img>
                                        ) :
                                            <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repostwhite} width='20px' height='17px' alt='Repost Icon'>
                                            </img>
                                        }
                                        <span>0</span>
                                    </div>
                                </section>
                                <section>
                                <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                                </img>
                                </section>
                            </div>
                        </div>

                        <div className={styles.caption}>
                            <p>
                                {getImgPost.text}
                            </p>
                        </div>
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

export default Feed;