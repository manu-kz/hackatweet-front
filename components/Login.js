import styles from '../styles/Login.module.css';
import Image from 'next/image';
import Signup from './Signup';
import Signin from './Signin';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'


function Login() {

const router = useRouter()
const [openSignup, setOpenSignup] = useState(false)
const [openSignin, setOpenSignin] = useState(false)
const user = useSelector((state) => state.user.value);

if (user.token) {
  router.push('/main')
}else {


  return (
    <div>
                {openSignup && (
                <Signup closeSignup={setOpenSignup}/>
                )}
                {openSignin && (
                <Signin closeSignin={setOpenSignin}/>
                )}
      <main className={styles.main}>
      <div className={styles.left}>
      {!openSignup && !openSignin && <Image src="/twitterlogo.png" alt="the blue bird"  width={450} height={450} className={styles.image}/>}
      </div>
      <div className={styles.right}>
      {!openSignup && !openSignin && <Image src="/twitterlogo.png" alt="the blue bird"  width={40} height={40} className={styles.image}/>}
        <h1 className={styles.h1}>See What's<br/>happening</h1>
        <h2 className={styles.h2}>Join Hackatweet today.</h2>
        <div className={styles.registerContainer}>
				<div className={styles.registerSection}>
				</div>
				<div className={styles.registerSection}>
        <button id="signup" className={styles.signup} onClick={() => setOpenSignup(true)} >Signup</button>
        <p className={styles.p}>Already have an account ?</p>
          <button id="signin" className={styles.signin} onClick={() => setOpenSignin(true)}>Signin</button>
				</div>
			</div>
      </div>
      </main>
    </div>
  );
}
}

export default Login;
