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

export default class HomePage extends PureComponent {
  state={}
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Container>
          <Title>第一个桌面应用</Title>
        </Container>
        <div style={{ height: '60%' }}>Container</div>
        <LinkA to="/todo">跳转到Todo页面</LinkA><br />
        <LinkA to="abort">Abort</LinkA>
      </div>
    );
  }
}
