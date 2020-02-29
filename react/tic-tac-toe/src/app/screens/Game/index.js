import React, { Component } from 'react';

import calculateWinner from '../../../utils/calculate-winner';

import styles from './styles.module.scss';
import Board from './components/Board';


class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0
  }

  handleClick = i => {
    const { history, stepNumber, xIsNext } = this.state;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: newHistory.concat([{ squares }]),
      stepNumber: newHistory.length,
      xIsNext: !prevState.xIsNext
    })
    );
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move.id}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={this.handleClick}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
