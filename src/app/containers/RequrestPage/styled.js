import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 24px 10px 10px 10px;
`;

export const Loading = styled.div`
text-align: center;
padding: 40px;
color: #666;
font-size: 24px;
`;

export const Item = styled.div`
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  margin-top: 10px;
  width: 100%;
`;

export const Image = styled.img`
  width: 120px;
  height: 66px;
`;

export const DataContent = styled.div`
flex: 1;
padding: 0 10px;
`;

export const Title = styled.p`
  color: #333;
`;

export const Base = styled.div`
  display: flex;
  margin-top: 14px;
  color: #999;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const LinkA = styled(Link)`
color: #999;
position: fixed;
height: 24px;
top: 0;
left: 0;
width: 100%;
background: #fff;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
padding-left: 10px;
`;