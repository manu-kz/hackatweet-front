import styles from '../styles/Home.module.css';
import Login from './Login';
import Main from './Main';

function Home() {

const login = <Login />

  return (
   <>
   {login}
   </>
  );
}

export default Home;
