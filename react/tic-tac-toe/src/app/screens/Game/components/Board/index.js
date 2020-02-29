import React, { Component } from 'react';
import { func, string, arrayOf } from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  handleClick = i => this.props.onClick(i);

  renderSquare = i => {
    const { squares } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={() => this.handleClick(i)}
      />);
  }

  render() {
    return (
      <div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: arrayOf(string),
  onClick: func
};

export default Board;
