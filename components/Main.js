import styles from "../styles/Main.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const [inputValue, setinputValue] = useState("");
  const [tweetList, setallTweet] = useState([]);
  const user = useSelector((state) => state.user.value);
let postTweet = true

  const input = (
    <input
      className={styles.input}
      type="text"
      placeholder="What's up?"
      maxLength="280"
      onChange={(e) => setinputValue(e.target.value)}
      value={inputValue}
    ></input>
  );
  const inputLength = <span className={styles.tweetlength}>{inputValue.length} / 280</span>

  function handleTweetClick() {
    if (inputValue.length > 0) {
      fetch('http://localhost:3000/tweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: user.firstname, username: user.username, tweet: inputValue }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
              postTweet = !postTweet
              tweetList.unshift(data.tweet)
                setinputValue('');
             }
        });
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((data) => {
        console.log('list of tweets',data.tweets)
        setallTweet(data.tweets);
      });
  }, [postTweet]);

  const tweet = tweetList.map((data, i) => {
    return <Tweet
    key={i}
    {...data}
  />
  })


  function handleTrashClick() {}

  return (
    <div className={styles.main}>
      <div className={styles.infosection}>
        <div>
          <Image
            src="/twitterlogo.png"
            alt="the blue bird"
            width={50}
            height={50}
            className={styles.imageinfo}
          />
        </div>
        <div className={styles.userinfo}>
          <Image
            className={styles.imageinfo}
            src="/memoji.png"
            alt="profil picture"
            width={50}
            height={50}
          />
          <div>
            <h4>Title</h4>
            <p>@username</p>
          </div>
        </div>
      </div>
      <div className={styles.homesection}>
        <div className={styles.newtweet}>
          <h1 className={styles.hometitle}>Home</h1>
          {input}
          < div className={styles.button_lenght}>
            {inputLength}
            <button className={styles.tweetbtn} type="button" onClick={() => handleTweetClick()}>Tweet</button>
          </div>
        </div>
        {tweet}
      </div>
      <div className={styles.trendssection}>Trends</div>
    </div>
  );
}

export default Main;
