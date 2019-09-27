import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {black} from '../../styles/colors';

const navBarHeight = 70;
const halfOfNavBarHeight = navBarHeight / 2;

export const NavBarContainer = styled.div`
  height: ${navBarHeight}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.h1`
  font-weight: 300;
  color: ${black};
  font-size: ${halfOfNavBarHeight}px;
  border-bottom: 1px solid ${black};
  border-top: 1px solid ${black};
  line-height: ${halfOfNavBarHeight}px;
  height: ${halfOfNavBarHeight}px;
  width: ${navBarHeight}px;
  text-align: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: .8rem 1rem;
  cursor: pointer;
  font-size: 1.3rem;
`;

OptionLink.displayName = 'OptionLink';
