import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { makeSelectLoading } from '../App/selectors';
import { refreshToken } from '../App/actinos';

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

class HomePage extends PureComponent {
  state={}

  handleCLick = () => {
    this.props.refreshToken();
  }

  render() {
    const { loading } = this.props;
    return (
      <div style={{ height: '100vh' }}>
        <Container>
          <Title>{loading ? '第一个桌面应用' : '你点击了我'}</Title>
        </Container>
        <div style={{ height: '60%' }}><div onClick={this.handleCLick}>click</div></div>
        <LinkA to="/todo">跳转到Todo页面</LinkA><br />
        <LinkA to="abort">Abort</LinkA>
      </div>
    );
  }
}

HomePage.propTypes = {
  refreshToken: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshToken: () => dispatch(refreshToken()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);
