import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 10px 10px;
  text-decoration: none;
  color: inherit;
  &.active {
    color: #2362df;
  }
  &:hover {
    text-decoration: underline;
    color: #2362df;
  }
`;

export const StyledNav = styled.nav`
  padding: 20px 50px;
  font-size: 50px;
  box-shadow: 0px 0px 7px 0px grey;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;

export const PagesWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 34px;
`;
export const UserName = styled.span`
  color: #2362df;
`;
export const UserMail = styled.p`
  font-size: 24px;
  color: rgb(204, 204, 204);
`;
