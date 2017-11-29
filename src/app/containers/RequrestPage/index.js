import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducer';
import saga from './sagas';
import { fetchList } from './actions';
import * as selector from './selectors';

import { Container, Loading, Item, Image, DataContent, Title, Base, LinkA } from './styled';

class RequrestPage extends PureComponent {
  componentDidMount() {
    this.props.actionFetchList(1);
  }
  renderList = (list) => list.map((item) => 
    (<Item key={item.url}>
      <Image src={item.picUrl} />
      <DataContent>
        <Title>{item.title}</Title>
        <Base>
          <p>{item.ctime}</p>
          <p>{item.description}</p>
          {/* <p>{item.url}</p> */}
        </Base>
      </DataContent>
    </Item>));
  render() {
    const { dataList, fetchRequestingBool } = this.props;
    return (
      <Container>
        <LinkA to="/">返回</LinkA>
        {
          fetchRequestingBool ? <Loading>Loading...</Loading> :
            dataList.length > 0 ? this.renderList(dataList) : <Loading>暂无数据</Loading>
        }
      </Container>
    );
  }
}

RequrestPage.propTypes = {
  dataList: PropTypes.array,
  fetchRequestingBool: PropTypes.bool,
  actionFetchList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dataList: selector.selectDataList(),
  fetchRequestingBool: selector.selectRequestingBool(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionFetchList: (page) => dispatch(fetchList(page)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'RequrestPage', reducer });
const withSaga = injectSaga({ key: 'RequrestPage', saga });

export default compose(withReducer, withSaga, withConnect)(RequrestPage);
