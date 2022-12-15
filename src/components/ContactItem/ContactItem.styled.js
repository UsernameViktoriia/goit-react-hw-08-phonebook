import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 30px;
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
  border: 1px solid rgb(242, 242, 242);
  padding: 10px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 20px;
  &:hover {
    background-color: #3f51b5;
  }
`;
