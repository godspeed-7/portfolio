/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './toolbar.module.css';
import codeImg from '../../assets/icons/code.svg';
import { useHistory } from 'react-router-dom';

export default function Toolbar(props) {
  const history = useHistory();
  const options = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      emoji: '☕',
    },
    {
      id: 2,
      name: 'Projects',
      path: '/projects',
      emoji: '📚',
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact',
      emoji: '☎',
    },
  ];

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <div
          key={option.id}
          className={styles.headItem}
          onClick={() => history.push(`${option.path}`)}
        >
          {option.name} {option.emoji}
        </div>
      );
    });
  };
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.code}>
          <img src={codeImg} alt="" />
        </div>
        <div className={styles.logoName}>Ankit</div>
      </div>
      <div className={styles.right}>{renderOptions()}</div>
    </div>
  );
}
