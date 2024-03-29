/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import codeImg from '../../assets/icons/code.svg';
import { getLayout } from '../../resources/layout';
import styles from './toolbar.module.css';

export default function Toolbar(props) {
  const history = useHistory();
  const [layoutData, setlayoutData] = useState([]);

  useEffect(() => {
    const getLayoutData = async () => {
      try {
        // const { data } = await axios.get('http://localhost:3000/layout');
        // getLayout();
        setlayoutData(getLayout());
      } catch (error) {
        setlayoutData([]);
      }
    };
    getLayoutData();
  }, []);

  const renderOptions = () => {
    return layoutData.map((option) => {
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
      <div className={styles.right} data-testid="options">
        {renderOptions()}
      </div>
    </div>
  );
}
