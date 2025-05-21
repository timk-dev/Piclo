import styles from 'src/components/style.module.css';

import camera from "src/assets/camera.svg";
import sent from "src/assets/sent.svg";

const Inbox = () => {
    return(
        <main className={styles.inbox}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.inboxMessage}>
                        <div className={styles.openCam}>
                            <img rel='preload preconnect' loading='lazy' src={camera} width='25px' height='25px' alt='Camera Icon'>
                            </img>
                        </div>
                        <div className={styles.userAvatar}>
                            <div className={styles.messageAvatar}>
                                <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/women/92.jpg"} width='35px' height='35px' alt='User Icon'>
                                </img>
                                <p><span>Big Mama</span> <br />@camilewatts</p>
                            </div>

                            <div className={styles.newMessage}>
                                <span>Hello?</span>
                                <div className={styles.indicator}></div>
                                <span>-10m ago</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.openedMessage}>
                        <div className={styles.openCam}>
                            <img rel='preload preconnect' loading='lazy' src={camera} width='25px' height='25px' alt='Camera Icon'>
                            </img>
                        </div>
                        <div className={styles.userAvatar}>
                            <div className={styles.messageAvatar}>
                                <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/91.jpg"} width='35px' height='35px' alt='User Icon'>
                                </img>
                                <p><span>phillyStation</span> <br />@philtooraw</p>
                            </div>

                            <div className={styles.seenMessage}>
                                <span>im comin 4 u</span>
                                <div className={styles.indicatorOpen}></div>
                                <span>-2d ago</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inboxMessage}>
                        <div className={styles.openCam}>
                            <img rel='preload preconnect' loading='lazy' src={camera} width='25px' height='25px' alt='Camera Icon'>
                            </img>
                        </div>
                        <div className={styles.userAvatar}>
                            <div className={styles.messageAvatar}>
                                <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/women/4.jpg"} width='35px' height='35px' alt='User Icon'>
                                </img>
                                <p><span>Mrs.PutItOn</span> <br />@jericha</p>
                            </div>

                            <div className={styles.newMessage}>
                                <span>Sent</span>
                                <div className={styles.indicatorSent}></div>
                                <img rel='preload preconnect' loading='lazy' src={sent} width='20px' height='20px' alt='sent Icon'>
                                </img>
                                <span>-1wk ago</span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Inbox;