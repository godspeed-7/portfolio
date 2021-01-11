/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './toolbar.module.css';
import codeImg from '../../assets/icons/code.svg';
import { useHistory } from 'react-router-dom';

export default function Toolbar(props) {
  console.log('prtops', props);
  const history = useHistory();
  const options = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Projects',
      path: '/projects',
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact',
    },
  ];

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <h2
          key={option.id}
          className={styles.headItem}
          onClick={() => history.push(`${option.path}`)}
        >
          {option.name}
        </h2>
      );
    });
  };
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.code}>
          <img src={codeImg} alt="" />
        </div>
        <h1>Ankit</h1>
      </div>
      <div className={styles.right}>{renderOptions()}</div>
    </div>
  );
}
