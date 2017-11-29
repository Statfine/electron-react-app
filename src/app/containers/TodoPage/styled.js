import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 30%;
  background: #666;
`;

export const Title = styled.p`
  font-size: 24px;
  height: 100%;
  text-align: center;
  color: #fff;
  padding-top: 40px;
`;

export const LinkA = styled(Link)`
  color: #999;
`;

export const JumpBtn = styled.div`
  cursor: pointer;
  &:hover {
    color: #4885ed;
  }
`;

export const NoDate = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 24px;
`;

export const AddContent = styled.div`
  display: flex;
`;

export const UrlInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  &:focus {
    border: 1px solid #f97835;
  }
`;

export const Btn = styled.div`
  width: 64px;
  height: 42px;
  line-height: 42px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  display: block;
  text-align: center;
  margin-left: 20px;
  background: ${props =>
    props.disabled ? "rgba(249, 120, 53, 0.5)" : "#F97835"};
  &:hover {
    background: ${props =>
      props.disabled ? "rgba(249, 120, 53, 0.5)" : "#F76114"};
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  padding: 10px;
  border: #d9d9d9 solid 1px;
  margin-top: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
`;

export const ItemTitle = styled.p`
  flex: 1;
  height: 30px;
  line-height: 30px;
`;

export const ItemInput = styled.input`
flex: 1;
height: 30px;
padding: 0 10px;
background: #ffffff;
outline: none;
border: none;
border-bottom: 1px solid #d9d9d9;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
border-radius: 2px;
&:focus {
  border-bottom: 1px solid #f97835;
}
`;

export const ItemAction = styled(Btn)`
height: 30px;
line-height: 30px;
`;
