import React, { Component } from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  state = { value: null }

  handleClick = () => {
    this.setState({ value: 'X' });
  }

  render() {
    return (
      <button
        type="button"
        className={styles.square}
        onClick={this.handleClick}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
