import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import splash from '../../assets/splash.svg';
import profile from '../../assets/me.svg';
import { default as githubIcon } from '../../assets/icons/github.svg';
import { default as linkedinIcon } from '../../assets/icons/linked-in.svg';
import Ratings from '../../shared/ratings/ratings';
import { technologies } from '../../resources/techStack';
import axios from 'axios';
import _ from 'lodash';

export default function Home() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/profile');
        console.log(data);
        setProfileData(data);
      } catch (error) {
        setProfileData({});
      }
    };
    getProfileData();
  }, []);
  console.log(profileData);
  if (_.isEmpty(profileData)) {
    return <div>Loading...</div>;
  }
  const {
    name,
    title,
    description,
    links: { github, linkedin, resume } = {},
  } = profileData;
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>I{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.additional}>
            <img
              className="icon-with-animation"
              src={githubIcon}
              alt="splash"
              onClick={() => window.open(github, '_blank')}
            />
            <img
              className="icon-with-animation"
              src={linkedinIcon}
              alt="profile"
              onClick={() => window.open(linkedin, '_blank')}
            />
            <button
              type="button"
              className={`btn btn-danger btn-lg`}
              onClick={() => window.open(resume, '_blank')}
            >
              View Resume 👀
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
