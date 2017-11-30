import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Item from './Item';

import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducer';
import saga from './sagas';
import { todoAdd, todoEdit, todoDelete } from './actions';
import * as selector from './selectors';

import { Container, Title, LinkA, JumpBtn, NoDate, AddContent, UrlInput, Btn } from './styled';

class TodoPage extends PureComponent {
  state={
    text: '',
  }
  handleCreat = () => {
    const { text } = this.state;
    const id = Math.round(900000 * Math.random() + 100000);
    if (text.length === 0) this.urlInput.focus();
    else this.props.actionTodoAdd({ id, text });
    this.setState({ text: '' });
  }

  renderList = (list) =>
    list.map((item) =>
      (<Item
        key={item.id}
        itemObj={item}
        actionTodoEdit={this.props.actionTodoEdit}
        actionTodoDelete={this.props.actionTodoDelete}
      />)
  )

  render() {
    const { todoList } = this.props;
    const { text } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Container>
          <Title>这是Todo List页面</Title>
        </Container>
        <div style={{ height: '60%', padding: '30px 60px' }}>
          <AddContent>
            <UrlInput
              placeholder="输入"
              innerRef={(ref) => { this.urlInput = ref; }}
              onChange={(e) => this.setState({ text: e.target.value })}
              value={text}
              spellcheck="false"
              onKeyDown={(e) => {
                if (e.key === 'Enter') this.handleCreat();
              }}
            />
            <Btn onClick={this.handleCreat}>添加</Btn>
          </AddContent>
          {
            todoList.length === 0 ? <NoDate>暂无</NoDate> : this.renderList(todoList)
          }
        </div>
        <JumpBtn onClick={() => this.props.history.goBack()}>要返回去了</JumpBtn>
        <LinkA to="/">Home</LinkA><br />
        <LinkA to="abort">Abort</LinkA>
      </div>
    );
  }
}

TodoPage.propTypes = {
  todoList: PropTypes.array,
  actionTodoAdd: PropTypes.func,
  actionTodoEdit: PropTypes.func,
  actionTodoDelete: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  todoList: selector.selectTodoList(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionTodoAdd: (...arg) => dispatch(todoAdd(...arg)),
    actionTodoEdit: (...arg) => dispatch(todoEdit(...arg)),
    actionTodoDelete: (id) => dispatch(todoDelete(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'todoPage', reducer });
const withSaga = injectSaga({ key: 'todoPage', saga });

export default compose(withReducer, withSaga, withConnect)(TodoPage);
