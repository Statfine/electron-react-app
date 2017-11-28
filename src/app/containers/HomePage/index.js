import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends PureComponent {
  state={}
  render() {
    return (
      <div>
        <p>Hello word</p>
        <Link to="/todo">Todo</Link>
      </div>
    );
  }
}
