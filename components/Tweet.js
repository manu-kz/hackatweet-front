import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  const profilPicture = (
    <Image
      className={styles.imageinfo}
      src='https://m0.her.ie/wp-content/uploads/2015/06/19145708/MyspaceTom.jpg'
      alt="profil picture"
      width={50}
      height={50}
    />
  );

  const currentDate = new Date ()
  const tweetDate = props.date
  const delay = currentDate - tweetDate
  // console.log('delay',props.image)

  return (
   <div className={styles.tweet}>
      <div className={styles.textcontainer}>
        <p>{profilPicture} {props.firstname}<span> @{props.username}. {delay}</span></p>
      </div>
      <div><p>{props.tweet}</p></div>
      <div>
       <span><FontAwesomeIcon icon={faHeart}  /> </span>
          <span><FontAwesomeIcon icon={faTrashCan} /></span>
         
      </div>
      
    </div>
  );
}

export default Tweet;
