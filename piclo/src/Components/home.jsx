import styles from 'src/components/style.module.css';

import reactLazyWithRetry from '@fatso83/retry-dynamic-import/react-lazy';

import home from "src/assets/home.svg";
import post from "src/assets/post.svg";
import notif from "src/assets/notif.svg";
import search from "src/assets/search.svg";
import inbox from "src/assets/inbox.svg";
import user from "src/assets/user.svg";
import logo from "src/assets/plogo.svg";

import React, { useState, useEffect } from "react";
import { IPhoneMockup } from "react-device-mockup"
import classNames from 'classnames';
 
import Feed from 'components/feed';
import Login from 'components/login';
import Inbox from 'components/inbox';
import Notif from 'components/notifications';
import Post from 'components/post';
import Search from 'components/search';
import User from 'components/user';
import Register from 'components/acRegister';
import AppCont from './appCont';

import { Sidebar } from 'primereact/sidebar';
import UserBot from './userBot';

import { Avatar } from 'primereact/avatar';
        
const LazyLogin = reactLazyWithRetry(() => import("components/login"));
const LazyUser = reactLazyWithRetry(() => import("components/user"));
const LazyFeed = reactLazyWithRetry(() => import("components/feed"));
const LazyInbox = reactLazyWithRetry(() => import("components/inbox"));
const LazyNotif = reactLazyWithRetry(() => import("components/notifications"));
const LazyPost = reactLazyWithRetry(() => import("components/post"));
const LazySearch = reactLazyWithRetry(() => import("components/search"));

const Home = () => {
    const [show, setShow] = useState(false);
    const [getToken, setGetToken] = useState('');
    const [activeElement, setActiveElement] = useState('element1');
    const [data, setData] = useState(null);
    const [username, setUsername] = useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    console.log(data);

    React.useEffect(() => {
        const headers = { 'Authorization': `Bearer ${getToken}` }; // auth header with bearer token
        fetch("http://localhost:3001/api/user", {headers}, { credentials: "same-origin" })
        .then((res) => res.json())
        .then((username) => setUsername(username));
    }, []);

    console.log(username);

    const handleGetToken = (elementId) => {
        setGetToken(elementId);
    };

    const [visible, setVisible] = useState(false);
    /*
    const [showUser, setUserShown] = useState(false);
    const [showInbox, setInboxShown] = useState(false);
    const [showNotif, setNotifShown] = useState(false);
    */

    console.log(getToken, 'home token');

    return(
        <main>
            <section className={styles.landing}>
                <article className={styles.comingSoon}>
                    <p><span>{!data ? "Loading Version..." : data}</span></p>
                    <h1>Piclo App <span>v0</span></h1>
                    <p>Your digital social club</p>
                    <span>(Coming Soon)</span>

                    <img rel='preload preconnect' loading='lazy' src={logo} width='100px' height='100px' alt='Piclo logo'>
                    </img>

                    <p className={styles.picloDesc}>
                        "Piclo is the go-to app for sharing your photos, stories, and thoughts with friends and the world. Whether it’s a snapshot of your morning coffee, a breathtaking sunset, or just something on your mind, Piclo makes it easy and fun to connect."
                    </p>

                    <button onClick={() => setVisible(true)} className={styles.btn23}>
                        <span className={styles.text}>See Updates</span>
                        <span aria-hidden="" className={styles.marquee}>See Updates</span>
                    </button>

                    <Sidebar className={styles.sidebar} visible={visible} onHide={() => setVisible(false)}>
                        <h1>Updates</h1>
                        <span>v0.0.1 - 01/10/25</span>
                        <h2>Pre-Alpha</h2>
                        <p>
                            &#10565; Began production of app assests, design assets, and components.<br></br>
                            &#10565; Created a  basic social-media ui.<br></br>
                            &#10565; Came up with ui designs for the user page, comments, search bar, notifications, inbox, and news feed.
                        </p>

                        <span>v0.0.2 - 01/15/25</span>
                        <h2>Pre-Alpha</h2>
                        <p>
                            &#10565; Minor UI tweaks for greater readability.<br></br>
                        </p>

                        <span>v0.0.2 - 01/15/25</span>
                        <h2>Pre-Alpha</h2>
                        <p>
                            &#10565; Minor UI tweaks for greater readability.<br></br>
                        </p>
                    </Sidebar>
                </article>

                <article className={styles.appCont}>
                    {activeElement === 'element1' && <Login setToken={setGetToken} setParentState={setActiveElement}/>}
                    {activeElement === 'element2' && <Register />}
                    {activeElement === 'element3' && <AppCont state={{data: `${getToken}`}} />}
                </article>

                <IPhoneMockup className={styles.boxShadow} screenWidth={250} screenType="island" hideStatusBar={false} transparentNavBar={true}>
                    {/* your demo */}
                    <article className={styles.picloApp}>
                        <div className={styles.topHeader}>
                            <h1 className={styles.textGrad}>Piclo</h1>

                            {username && <span>user: {username.name}</span>}

                            <div className={styles.search}>
                                <img rel='preload preconnect' loading='lazy' src={search} width='75%' height='75%' alt='Search Icon'>
                                </img>
                            </div>
                        </div>

                        <section className={styles.content}>
                            {activeElement === 'element1' && <Feed />}
                            {activeElement === 'element3' && <User />}{/*<User />*/}
                            {activeElement === 'element2' && <Inbox />}
                            {activeElement === 'element4' && <Notif />}
                            {activeElement === 'element5' && <Post />}
                            {activeElement === 'element6' && <Search />}
                            {activeElement === 'element7' && <UserBot />}
                            {activeElement === 'element8' && <Register />}

                            <article className={classNames(styles.logfoot, styles.scrollCont)}>
                                <Login />
                                <div className={styles.footerPadding}></div>
                            </article>
                        </section>

                        <div className={styles.bottomFooter}>
                            <input type="checkbox" id="theme-mode" className={styles.mode} hidden />
                            <div className={styles.container}>
                                <div className={styles.wrap}>
                                    <input defaultChecked type="radio" id="rd-1" name="radio" className={styles.rd1} hidden />
                                    <label htmlFor="rd-1" className={styles.label} style={{index: "0"}}>
                                        <span>
                                            <img rel='preload preconnect' loading='lazy' src={home} width='25px' height='15px' alt='Home Icon'>
                                            </img>
                                        </span>
                                    </label>
                                    <input type="radio" id="rd-2" name="radio" className={styles.rd-2} hidden />
                                    <label htmlFor="rd-2" className={styles.label} style={{index: "1"}}>
                                        <span>
                                            <img rel='preload preconnect' loading='lazy' src={post} width='25px' height='15px' alt='Post Icon'>
                                            </img>
                                        </span>
                                    </label>
                                    <input type="radio" id="rd-3" name="radio" className={styles.rd3} hidden />
                                    <label htmlFor="rd-3" className={styles.label} style={{index: "2"}}>
                                        <span>
                                            <img rel='preload preconnect' loading='lazy' src={notif} width='25px' height='15px' alt='Notification Icon'>
                                            </img>
                                        </span>
                                    </label>
                                    <input type="radio" id="rd-4" name="radio" className={styles.rd4} hidden />
                                    <label htmlFor="rd-4" className={styles.label} style={{index: "3"}}>
                                        <span>
                                            <img rel='preload preconnect' loading='lazy' src={inbox} width='25px' height='15px' alt='Inbox Icon'>
                                            </img>
                                        </span>
                                    </label>
                                    <div className={styles.bar} />
                                    <div className={styles.slidebar} />
                                </div>
                            </div>
                        </div>
                    </article>
                </IPhoneMockup>
            </section>
        </main>
    );
}

export default Home;