import styles from 'src/components/style.module.css';

import { Avatar } from 'primereact/avatar';
import classNames from 'classnames';

import React, { useState, useEffect } from "react";


const Search = ({foundId, userSearch, setParentState}) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setParentState("element2");
    };

    const handleClickProfile = () => {
        setParentState("element9");
        foundId(value);
    };

    const handleSeeProfile = (newToken) => {
        console.log(newToken, "open profile");
    };

    console.log(foundId, "value")

    return(
        <main className={styles.searchComp}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.separator}>
                        <hr className={styles.line}></hr>
                        <span>Found.Users</span>
                        <hr className={styles.line}></hr>
                    </div>
                    {userSearch && Array.isArray(userSearch) ? userSearch.map((id) => {
                                    
                        return(
                            <div onClick={() => {handleClickProfile(), foundId(id._id), console.log(id._id, "id", value)}} className={styles.spaceFiller}>
                                <article>
                                    <div className={styles.avatarRound}>
                                
                                        <Avatar 
                                            className={classNames(styles.roundIt)}
                                            image={userSearch && id.avatar ? id.avatar : null}
                                            label={`${id.name}`.slice(0, 2)}
                                            loading="lazy"
                                            shape='circle' 
                                        >
                                        </Avatar> 

                                    </div>

                                    <p><span>{id.callsign}</span><br />@{id.name}</p>
                                </article>

                                {id.bio ? <span className={styles.truncate}>{id.bio}</span> : <span>--</span> }
                            </div>
                        )
                    }): 
                    <div className={styles.ellipsus}>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                    </div>
                    }

                    <div className={styles.footerPadding}></div>

                </article>
            </section>
        </main>
    );
}

export default Search;