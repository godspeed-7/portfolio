import React from 'react';
import styles from './home.module.css';
import splash from '../../assets/splash.svg';
import profile from '../../assets/me.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linked-in.svg';
import Ratings from '../../shared/ratings/ratings';
import { technologies } from '../../resources/techStack';

export default function Home() {
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
              className="icon-with-animation"
              src={github}
              alt="splash"
              onClick={() =>
                window.open('https://github.com/godspeed-7', '_blank')
              }
            />
            <img
              className="icon-with-animation"
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
          <Ratings ratings={technologies} />
        </div>
        <div className={styles.right}>
          <img src={splash} alt="splash" className={styles.splash} />
          <img src={profile} alt="profile" className={styles.profile} />
        </div>
      </div>
    </React.Fragment>
  );
}
