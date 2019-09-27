import styled from 'styled-components';

import { ReactComponent as ShoppingBagIconSVG } from '../../assets/shopping-bag.svg';

export const ShoppingBagIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

ShoppingBagIconContainer.displayName = 'ShoppingBagIconContainer';

export const ShoppingBagIconAsset = styled(ShoppingBagIconSVG)`
  width: 2rem;
  height: 2rem;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';
