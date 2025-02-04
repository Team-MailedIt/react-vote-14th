import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import COLORS from '../../constants/colors';

export const Sidebar = styled.section`
  width: 20%;
  height: 100vh;
  min-width: 180px;

  display: grid;
  grid-template-rows: 1.75fr 6.25fr 2fr;
  grid-template-areas:
    'logo'
    'menus'
    'signout';

  background: #ffffff;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;

  display: flex;
  align-items: center;

  color: #000000;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 180px;

  grid-area: logo;

  align-self: center;
  justify-self: center;

  object-fit: contain;
`;

export const Menus = styled.menu`
  grid-area: menus;

  padding: 0;

  display: flex;
  flex-direction: column;
`;

export const Group = styled.section`
  height: 20%;
  margin-top: 5%;
  margin-bottom: 25%;
`;

export const GroupName = styled.section`
  width: 70%;

  margin: 0 15% 5% 15%;
  padding-bottom: 2.5%;

  font-size: 18px;
  font-weight: 400;

  border-bottom: 1px solid #6e6e6e;
`;

export const Menu = styled.span`
  margin: 5% 0 2.5% 15%;

  color: #6e6e6e;
  font-size: 16px;

  .active & {
    color: ${COLORS.primary};
    font-weight: 500;
  }
`;

export const SignOut = styled.section`
  grid-area: signout;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignOutButton = styled.button`
  grid-area: signout;

  color: #c3c3c3;
  font-size: 15px;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;
