import styles from 'src/components/style.module.css';

import posts from "src/assets/posts.svg";
import pics from "src/assets/pictures.svg";
import heart from "src/assets/heart.svg";
import heartwhite from "src/assets/heartwhite.svg";
import repost from "src/assets/repost.svg";
import repostwhite from "src/assets/repostwhite.svg";
import book from "src/assets/bookmark.svg";
import comment from "src/assets/comment.svg";

import { setBasePath } from 'https://esm.sh/@shoelace-style/shoelace@2.19.1/cdn/utilities/base-path';
// Set the base path for Shoelace assets
import SlTab from '@shoelace-style/shoelace/dist/react/tab/index.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/react/tab-group/index.js';
import SlTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel/index.js';

import { Avatar } from 'primereact/avatar';

import React, { useState, useEffect } from "react";
import classNames from 'classnames';

const User = () => {
    setBasePath('https://esm.sh/@shoelace-style/shoelace@2.19.1/dist/')

    const [openLikes, setOpenLikes] = useState(false);
    const [giveLikes, setGiveLikes] = useState(false);

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

    return(
        <main className={styles.user}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.profileImgs}>
                        <div className={styles.coverImg}>
                            <div className={styles.avatarRound}>
                                {/*<SlAvatar
                                    className={styles.roundIt}
                                    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                    label="User avatar picture"
                                    loading="lazy"
                                    shape="rounded"
                                />*/}
                                <Avatar 
                                    className={classNames(styles.roundIt)}
                                    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                    label="User avatar picture"
                                    loading="lazy"
                                    shape='circle' 
                                >
                                </Avatar>

                            </div>
                            <div className={styles.profileDesc}>
                                <p>@sleazdoug</p>
                                <span>Joined Jan 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.friendCont}>
                        <div className={styles.frCount}>
                            <p>1</p>
                            <p><strong>posts</strong></p>
                        </div>
                        <div className={styles.frCount}>
                            <p>4</p>
                            <p><strong>pics</strong></p>
                        </div>
                        <div className={styles.frCount}>
                            <p>1</p>
                            <p><strong>followers</strong></p>
                        </div>
                        <div className={styles.frCount}>
                            <p>25</p>
                            <p><strong>friended</strong></p>
                        </div>
                    </div>

                    <div className={styles.bio}>
                        <div className={styles.buttonCont}>
                            <span className={styles.followBtn}>+ Add Friend</span>
                            <span className={styles.followBtn}>Send Message</span>
                        </div>

                        <span><strong>sleazyd</strong></span>
                        
                        <p>Living vicariously through myself. Practice what you post. <br></br> Actions {'>'} words</p>
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
                            <div className={styles.userPost}>
                                <div className={styles.userAvatar}>
                                    <div className={styles.avatarRound}>
                                        <Avatar 
                                            className={styles.postAvatar}
                                            image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                            label="User avatar picture"
                                            loading="lazy"
                                            shape='circle' 
                                            size="xlarge"
                                        ></Avatar>
                                        {/*
                                        <SlAvatar
                                            className={styles.postAvatar}
                                            image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                            label="User avatar picture"
                                            loading="lazy"
                                            shape="rounded"
                                        />
                                        */}
                                    </div>
                                    <p><strong>sleazyd</strong> @sleazdoug</p>
                                    <span>-01/02/25</span>
                                </div>
                                <div className={styles.postText}>
                                    <p>
                                        Why I delete the app now I cant find it in the app store (╥_╥)
                                    </p>
                                </div>
                                <div className={styles.interaction}>
                                    <section className={styles.interCont}>
                                        <div className={styles.likeCont}>
                                            {/*
                                            {giveLikes ? (
                                                <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={hearted} width='20px' height='17px' alt='Like Icon'>
                                                </img>
                                            ) :
                                                <img onClick={giveLikeClick} rel='preload preconnect' loading='lazy' src={heart} width='20px' height='17px' alt='Like Icon'>
                                                </img>
                                            }
                                            */}
                                            <span /*onClick={likeClick}*/>1</span>
                                        </div>

                                        <div /*onClick={commentClick}*/ className={styles.commentCont}>
                                            <img rel='preload preconnect' loading='lazy' src={comment} width='20px' height='17px' alt='Comment Icon'>
                                            </img>
                                            <span>0</span>
                                        </div>
                                        <div className={styles.rePostCont}>
                                            {/*
                                            {giveRepost ? (
                                                <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={reposted} width='20px' height='17px' alt='Repost Icon'>
                                                </img>
                                            ) :
                                                <img onClick={giveRepostClick} rel='preload preconnect' loading='lazy' src={repost} width='20px' height='17px' alt='Repost Icon'>
                                                </img>
                                            }
                                            */}
                                            <span>2</span>
                                        </div>
                                    </section>

                                    <img rel='preload preconnect' loading='lazy' src={book} width='20px' height='17px' alt='Bookmark Icon'>
                                    </img>
                                </div>
                            </div>
                        </SlTabPanel>
                        <SlTabPanel name="pictures">
                            <div className={styles.picCont}>
                                <img rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1736660756~exp=1736664356~hmac=f136bd07b972a90ab961e9012164400acdfb420315fa2d8b44e728999c148736&w=900"} width='100%' height='100%' alt='User Icon'>
                                </img>
                                <img rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1736660756~exp=1736664356~hmac=f136bd07b972a90ab961e9012164400acdfb420315fa2d8b44e728999c148736&w=900"} width='100%' height='100%' alt='User Icon'>
                                </img><img rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1736660756~exp=1736664356~hmac=f136bd07b972a90ab961e9012164400acdfb420315fa2d8b44e728999c148736&w=900"} width='100%' height='100%' alt='User Icon'>
                                </img><img rel='preload preconnect' loading='lazy' src={"https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1736660756~exp=1736664356~hmac=f136bd07b972a90ab961e9012164400acdfb420315fa2d8b44e728999c148736&w=900"} width='100%' height='100%' alt='User Icon'>
                                </img>
                            </div>
                        </SlTabPanel>
                        <SlTabPanel name="custom">Sorry, there are no repost.</SlTabPanel>
                        <SlTabPanel name="advanced">They don't like anything.</SlTabPanel>
                    </SlTabGroup>
                    </div>

                    <div className={styles.footerPadding}></div>

                </article>
            </section>
        </main>
    );
}

export default User;