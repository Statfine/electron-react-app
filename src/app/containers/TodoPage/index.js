import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class TodoPage extends PureComponent {
  state={}
  render() {
    return (
      <div>
        TodoPage
        <div onClick={() => this.props.history.goBack()}>要返回去了</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
