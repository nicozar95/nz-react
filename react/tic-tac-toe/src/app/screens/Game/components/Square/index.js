import React from 'react';
import { func, string } from 'prop-types';

import styles from './styles.module.scss';

function Square({ value, onClick }) {
  return (
    <button type="button" className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: func.isRequired,
  value: string
};

export default Square;
