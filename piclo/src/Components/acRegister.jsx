import styles from 'src/components/style.module.css';

import React, { useState, useRef, useEffect } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/md-light-indigo/theme.css";

const Register = ({ setParentState }) => {
    const [value, setValue] = useState('');
    const [activeElement, setActiveElement] = useState("element1");
    const [activeIndex, setActiveIndex] = useState(0);
    const [getName, setGetName] = useState(value ?? '');
    const [getUserName, setGetUserName] = useState(value ?? '');
    const [getEmail, setGetEmail] = useState(value ?? '');
    const [getPassword, setGetPassword] = useState(value ?? '');

    const handleElementClick = (elementId) => {
        setActiveElement(elementId);
    };

    function checkInput() {
        var f = document.getElementById('nameReg');
        var cansubmit = true;

        if (f[i].value.length == 0) cansubmit = false;

        document.getElementById('nextBtn').disabled = cansubmit;
    }

    function nextPage(element, e) {
        handleElementClick(`${element}`);
        setActiveIndex(e);
    }

    const toast = useRef(null);
    const items = [
        {
            label: 'Username',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Email',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Password',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
            }
        },
        {
            label: 'Profile Photo',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    const toastImg = useRef(null);
    const onUpload = () => {
        toastImg.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const handleClick = () => {
        setParentState("element1");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let databody = {
            "name": getName,
            "callsign": getUserName,
            "email": getEmail,
            "password": getPassword 
        }
     
        fetch('http://localhost:3001/api/register', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));

        handleClick();
    }

    return(
        <main className={styles.register}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <div className={styles.registerSteps}>
                        <Toast ref={toast}></Toast>
                        <Steps className={styles.stepCont} model={items} activeIndex={activeIndex} readOnly={false} />
                    </div>

                    <form onSubmit={handleSubmit} name='registerAccount' className={styles.registerForm}>
                        {activeElement === 'element1' &&
                        <div className={styles.formName}>
                            <article>
                                <div>
                                    <h2>Welcome to</h2>
                                    <h1 className={styles.feedLogo}>Piclo</h1>
                                </div>

                                <p>
                                    You're new account needs a name. Enter it below.
                                </p>
                            </article>

                            <div className={styles.enterInfo}>
                                <input type="text" className={styles.enterInfoBox} placeholder="Name" value={getName} onInput={(e) => {setGetName(e.target.value), console.log(getName)}} required></input>
                                <label for="name">Name</label>
                            </div>

                            <div className={styles.enterInfo}>
                                <input id='nameReg' type="text" className={styles.enterInfoBox} placeholder="@Username" value={getUserName} onInput={(e) => {setGetUserName(e.target.value), console.log(getUserName)}} required></input>
                                <label for="username">Username</label>
                            </div>

                            <button id='nextBtn' onClick={() => nextPage('element2', 1)} title="Next" className={styles.signInBtn}>
                                <span>Next</span>
                            </button>
                        </div>
                        }          
                        {activeElement === 'element2' &&
                        <div className={styles.formName}>
                            <article>
                                <div>
                                    <h2>Welcome to</h2>
                                    <h1 className={styles.feedLogo}>Piclo</h1>
                                </div>

                                <p>
                                    Do you want to register with a phone or email?
                                </p>
                            </article>

                            <div className={styles.enterInfo}>
                                <input type="text" className={styles.enterInfoBox} placeholder="email address" value={getEmail} onInput={(e) => {setGetEmail(e.target.value), console.log(getEmail)}} required></input>
                                <label for="email">Email</label>
                            </div>

                            <button id='nextBtn' onClick={() => nextPage('element3', 2)} title="Next" className={styles.signInBtn}>
                                <span>Next</span>
                            </button>
                        </div>
                        }
                        {activeElement === 'element3' &&
                        <div className={styles.formName}>
                            <article>
                                <div>
                                    <h2>Welcome to</h2>
                                    <h1 className={styles.feedLogo}>Piclo</h1>
                                </div>

                                <p>
                                    Create a new password. We can save it if you like.
                                </p>
                            </article>

                            <div className={styles.enterInfo}>
                                <input type="text" className={styles.enterInfoBox} placeholder="password" value={getPassword} onInput={(e) => {setGetPassword(e.target.value), console.log(getPassword)}} required></input>
                                <label for="password">Password</label>
                            </div>

                            <button id='nextBtn' onClick={() => nextPage('element4', 3)} title="Next" className={styles.signInBtn}>
                                <span>Next</span>
                            </button>
                        </div>
                        }
                        {activeElement === 'element4' &&
                        <div className={styles.formName}>
                            <article>
                                <div>
                                    <h2>Welcome to</h2>
                                    <h1 className={styles.feedLogo}>Piclo</h1>
                                </div>

                                <p>
                                    Upload a profile photo.
                                </p>
                            </article>

                            <div className={styles.enterInfo}>
                                <Toast ref={toastImg}></Toast>
                                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel=" - add" />
                            </div>

                            <button title="Submit" type="submit" className={styles.signInBtn}>
                                <span>Submit</span>
                            </button>
                        </div>
                        }
                    </form>
                </article>
            </section>
        </main>
    );
}

export default Register;