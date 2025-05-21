import styles from 'src/components/style.module.css';

import Camera from 'react-html5-camera-photo';
import { Avatar } from 'primereact/avatar';
import 'react-html5-camera-photo/build/css/index.css';

import pics from "src/assets/picturesblk.svg";
import posts from "src/assets/postsblk.svg";

import classNames from 'classnames';

import React, { useState, useEffect } from "react";
import { Form } from 'react-router-dom';

const Post = ({accAvatar, accName, bearToken, setParentState}) => {
    const [value, setValue] = useState('');
    const [getAuthor, setGetAuthor] = useState(value ?? '');
    const [getTitle, setGetTitle] = useState(value ?? '');
    const [getText, setGetText] = useState(value ?? '');
    const [getImg, setGetImg] = useState(value ?? '');
    const [getUrl, setGetUrl] = useState(value ?? '');
    const [postType, setPostType] = useState(false);

    const handlePostTypeClick = event => {
        // 👇️ toggle shown state
        setPostType(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    const isFullscreen = true;

    const handleClick = () => {
        setParentState("element1");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let databody = {
            "author": getAuthor,
            "title": getTitle,
            "text": getText
        }
     
        fetch('http://localhost:3001/api/post', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: bearToken
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));

        handleClick();
    }

    const postFetchImg = () => {
        const data = new FormData();
        data.append("file", getImg);
        data.append("upload preset", "piclo_imgdata");
        data.append("cloudname", "djc4bnvp5");

        fetch("https://api.cloudinary.com/v1_1/djc4bnvp5/image/upload", {
            method:'post',
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setGetUrl(data.url)
        })
        .catch(err=>{
            console.log(err);
        })
    } 

    const handleImgSubmit = (e) => {
        e.preventDefault();
        let databody = {
            "author": getAuthor,
            "title": getTitle,
            "text": getText,
            "image": getImg
        }
     
        fetch('http://localhost:3001/api/imgpost', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: bearToken
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));

        handleClick();
    }

    return(
        <main className={styles.post}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.avatarRound}>
                        {/*<SlAvatar
                            className={styles.roundIt}
                            image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                            label="User avatar picture"
                            loading="lazy"
                            shape="rounded"
                        />*/}
                        {accName &&
                            <Avatar 
                                className={classNames(styles.roundIt)}
                                image={accAvatar && accAvatar ? accAvatar : null}
                                label={`${accName}`.slice(0, 2)}
                                loading="lazy"
                                shape='circle' 
                            >
                            </Avatar> 
                        } 

                    </div>

                    <div className={styles.postType}>
                        <p>Post Type</p>
                        {postType ?                       
                            <div>
                                <span onClick={handlePostTypeClick} >Post-Only</span>
                                <span className={styles.active}> 
                                    <img rel='preload preconnect' loading='lazy' src={pics} width='10px' height='10px' alt='Pics Icon'>
                                    </img>
                                    Img
                                </span>
                            </div>
                            :
                            <div>
                                <span className={styles.active}>
                                    <img rel='preload preconnect' loading='lazy' src={posts} width='10px' height='10px' alt='Post Icon'>
                                    </img>
                                    Pst-Oly
                                </span>
                                <span onClick={handlePostTypeClick} >Image</span>
                        </div>
                        }
                    </div>

                    {postType ?

                        <form onSubmit={handleImgSubmit} className={styles.enterInfo}>
                            <textarea rows={5} cols={30} type="text" className={classNames(styles.textArea, styles.enterInfoBox)} placeholder="Leave a caption." value={getText} onChange={(e) => {setGetText(e.target.value), setGetAuthor(accName), setGetTitle(`${accName} post`), console.log(getText, getAuthor, getTitle)}} required></textarea>
                            <label for="make a post">Leave a caption.</label>
                            
                            <div className={styles.buttonCont}>
                                <input className={styles.chooseFileBtn} type="file" accept="image/*" capture="environment" value={getImg} onChange={(e) => {setGetImg(e.target.value), setGetAuthor(accName), setGetTitle(`${accName} post`), console.log(getText, getAuthor, getTitle, getImg)}} required/>
                                <button title='Submit' type='submit' className={styles.followBtn}>
                                    <p>POST</p>
                                </button>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmit} className={styles.enterInfo}>
                            <textarea rows={5} cols={30} type="text" className={classNames(styles.textArea, styles.enterInfoBox)} placeholder="What's on your mind?" value={getText} onChange={(e) => {setGetText(e.target.value), setGetAuthor(accName), setGetTitle(`${accName} post`), console.log(getText, getAuthor, getTitle)}} required></textarea>
                            <label for="make a post">What's on your mind?</label>
                            <button title='Submit' type='submit' className={styles.followBtn}>
                                <p>POST</p>
                            </button>
                        </form>

                    }

                    {/*
                    <div className={styles.cameraHolder}>
                        <Camera
                            className={styles.camera}
                            isFullscreen={true}
                            onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                        />
                    </div>
                    */}
                </article>
            </section>
        </main>
    );
}

export default Post;