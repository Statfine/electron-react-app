import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ItemDiv, ItemTitle, ItemInput, ItemAction } from './styled';

class Item extends PureComponent {
  state = {
    inputValue: '',
    openEdit: false,
  }

  handleRequestEdit = () => {
    const { actionTodoEdit, itemObj } = this.props;
    const { inputValue } = this.state;
    if (inputValue.length === 0) this.titleInput.focus();
    else {
      actionTodoEdit({ id: itemObj.id, text: inputValue });
      this.setState({ openEdit: false });
    }  
  }

  render() {
    const { itemObj, actionTodoDelete } = this.props;
    const { openEdit, inputValue } = this.state;
    return (
      <ItemDiv>
        {
          openEdit ? <ItemInput
              innerRef={(ref) => { this.titleInput = ref; }}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
              value={inputValue}
              spellcheck="false"
              onKeyDown={(e) => {
                if (e.key === 'Enter') this.handleRequestEdit();
              }}
              onBlur={() => this.setState({ openEdit: false })}
            /> : <ItemTitle>{itemObj.text}</ItemTitle>
        }
        <ItemAction onClick={() => this.setState({ openEdit: true, inputValue: itemObj.text }, () => this.titleInput.focus())}>
          修改
        </ItemAction>
        <ItemAction onClick={() => actionTodoDelete(itemObj.id)}>删除</ItemAction>
      </ItemDiv>
    );
  }
}

Item.propTypes = {
  itemObj: PropTypes.object,
  actionTodoEdit: PropTypes.func,
  actionTodoDelete: PropTypes.func,
};

export default Item;
