import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  height: 30%;
  background: #666;
`;

const Title = styled.p`
  font-size: 24px;
  height: 100%;
  text-align: center;
  color: #fff;
  padding-top: 10%;
`;

const LinkA = styled(Link)`
  color: #999;
`;

const JumpBtn = styled.div`
  cursor: pointer;
  &:hover {
    color: #4885ed;
  }
`;

export default class TodoPage extends PureComponent {
  state={}
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Container>
          <Title>这是Todo List页面</Title>
        </Container>
        <div style={{ height: '60%' }}>
          <JumpBtn onClick={() => this.props.history.goBack()}>要返回去了</JumpBtn>
        </div>
        <LinkA to="/">Home</LinkA><br />
        <LinkA to="abort">Abort</LinkA>
      </div>
    );
  }
}
