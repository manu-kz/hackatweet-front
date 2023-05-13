import styles from '../styles/Signin.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { signup } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';



const Signin = ({closeSignin}) => {
const [signInUsername, setSignInUsername] = useState('')
const [signInPassword, setSignInPassword] = useState('')
const user = useSelector((state) => state.user.value);

const dispatch = useDispatch();


const handleSignin = () => {

    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
            console.log('sigindata',data)
            if (data.result) {
                dispatch(signup({ username: signInUsername, token: data.token }));
                setSignInUsername('');
                setSignInPassword('');
            }
        });
};


  return (
    <div className={styles.overlay}>
        <div className={styles.signInContainer}>
            <div className={styles.divCloseBtn}>
            <button onClick={() => closeSignin(false)} className={styles.CloseBtn}>X</button>
            </div>
            <div className={styles.body}>
        <Image src="/twitterlogo.png" alt="the blue bird"  width={80} height={80} className={styles.image}/>
        <h2 className={styles.title}>Create your Hackatweet account</h2>
        <div className={styles.inputs}>
        <input className={styles.input} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
		<input className={styles.input} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        </div>
        {/* <div classname={styles.footer}> */}
        <button id="signin" className={styles.signin} onClick={() => handleSignin()}>Signin</button>
        {/* </div> */}
        </div>
        </div>
    </div>
  )
}

export default Signin



