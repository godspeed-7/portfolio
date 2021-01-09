/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './toolbar.module.css';
import codeImg from '../../assets/icons/code.svg';

export default function Toolbar() {
  const options = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Projects',
    },
    {
      id: 3,
      name: 'Contact',
    },
  ];

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <h2 key={option.id} className={styles.headItem}>
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
