import React from 'react';
import ToolBar from '../../layout/toolbar/toolbar';
import styles from './home.module.css';
import splash from '../../assets/splash.svg';
import profile from '../../assets/me.svg';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram 1.svg';
import linkedin from '../../assets/icons/linked-in.svg';
import twitter from '../../assets/icons/twitter 1.svg';
import Ratings from '../../shared/ratings/ratings';

export default function Home() {
  const ratings = [
    {
      id: 1,
      name: 'Javascript',
      rating: 4,
    },
    {
      id: 2,
      name: 'HTML/CSS',
      rating: 4,
    },
    {
      id: 3,
      name: 'React',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Node',
      rating: 3.5,
    },
    {
      id: 5,
      name: 'Typescript',
      rating: 3,
    },
  ];
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}> Hi 👋This is Ankit 🚀</div>
          <div className={styles.title}>I am a Front End Developer 🔥</div>
          <div className={styles.description}>
            Over 4 years of experience in software development. I specialize in
            React, Typescript, Javascript, NodeJS, React Native. Solid
            communication and interpersonal skills.{' '}
          </div>
          <div className={styles.additional}>
            <img
              src={github}
              alt="splash"
              onClick={() => window.open('https://github.com/Amnok', '_blank')}
            />
            <img
              src={linkedin}
              alt="profile"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/ankit-singh-14576696/',
                  '_blank'
                )
              }
            />
            <button
              type="button"
              className={`btn btn-danger btn-lg`}
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1aRI9FLqwMfZlxDhErutmiLWc-ue5ryId/view?usp=sharing',
                  '_blank'
                )
              }
            >
              View Resume👀
            </button>
          </div>
          <Ratings ratings={ratings} />
        </div>
        <div className={styles.right}>
          <img src={splash} alt="splash" className={styles.splash} />
          <img src={profile} alt="profile" className={styles.profile} />
        </div>
      </div>
    </React.Fragment>
  );
}
