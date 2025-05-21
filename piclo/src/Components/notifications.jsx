import styles from 'src/components/style.module.css';

import classNames from 'classnames';

const Notif = () => {
    return(
        <main className={styles.notif}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={classNames(styles.howLong, styles.userPost)}>
                        <h2>Last 7 days</h2>
                    </div>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/15.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><strong>skyeee</strong></p>
                            <span>Liked your post -1d ago</span>
                        </div>
                    </div>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/65.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><strong>alvinnochip</strong></p>
                            <span>Liked your comment: pls its for u -3d ago</span>
                        </div>
                    </div>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/women/7.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><strong>mrsmack</strong></p>
                            <span>sent a friend request -4d ago</span>
                        </div>
                    </div>
                    <div className={classNames(styles.howLong, styles.userPost)}>
                        <h2>Last 30 days</h2>
                    </div>
                    <div className={styles.userPost}>
                        <div className={styles.userAvatar}>
                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/women/92.jpg"} width='25px' height='25px' alt='User Icon'>
                            </img>
                            <p><strong>Big Mama</strong></p>
                            <span>sent a message -2wk ago</span>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Notif;