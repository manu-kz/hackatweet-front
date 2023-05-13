import styles from '../styles/Signup.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { signup } from '../reducers/user';
import { useDispatch } from 'react-redux';

const Signup = ({closeSignup}) => {
const [signUpFirstname, setSignUpFirstname] = useState('')
const [signUpUsername, setSignUpUsername] = useState('')
const [signUpPassword, setSignUpPassword] = useState('')
const dispatch = useDispatch();


const handleSignup = () => {
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                dispatch(signup({ username: signUpUsername, token: data.token }));
                setSignUpFirstname('');
                setSignUpUsername('');
                setSignUpPassword('');
                closeSignup(false)           
             }
        });
};


  return (
    <div className={styles.overlay}>
        <div className={styles.signUpContainer}>
            <div className={styles.divCloseBtn}>
            <button onClick={() => closeSignup(false)} className={styles.CloseBtn}>X</button>
            </div>
            <div className={styles.body}>
        <Image src="/twitterlogo.png" alt="the blue bird"  width={80} height={80} className={styles.image}/>
        <h2 className={styles.title}>Create your Hackatweet account</h2>
        <div className={styles.inputs}>
        <input className={styles.input} type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
        <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
		<input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
        </div>
        {/* <div classname={styles.footer}> */}
        <button id="signin" className={styles.signup} onClick={() => handleSignup()} >Signup</button>
        {/* </div> */}
        </div>
        </div>
    </div>
  )
}

export default Signup