import styled, { css } from "styled-components";
import { respondToMax } from '../../../util/styleComponentUtil/_mixin';

export default css``;

export const StyledHeader = styled.header`{
  position: fixed;
  width: 0;
  left: 0px;
  top: 0;
  z-index: 999;
  transition: 0.2s left cubic-bezier(0.22, 0.61, 0.36, 1), 0s 0.2s background linear;
  height: 100%;
  overflow: visible;
  
  ${respondToMax.lg`
    width: 100%;
    height: auto;
    min-height: 100px;
  `}
  
  .header-logo {
    position: absolute;
    top: 35px;
    left: 0;
    img {
      max-width: none;
      max-height: none;
      width: 250px;
      height: 140px;
    }
    ${respondToMax.lg`
      top: 0;
      transition: transform .3s linear;
    `}
  }
  
  #toggle {
    height: 70px;
    position: relative;
    transition: transform .3s linear;
    background-color: #fff;
    &:before,
    &:after {
      content: '';
      height: 3px;
      width: 0;
      background: #000000;
      left: 22px;
      position: absolute;
      transform-origin: 50% 50%;
      transition: all 0.25s;
      top: 35px;
    }
    &:before {
      transform: translate3d(0, -8px, 0px);
      width: 21px;
    }
    &:after {
      transform: translate3d(0, 8px, 0);
      width: 30px;
    }
    .menu-line {
      width: 13px;
      height: 3px;
      background: #000000;
      left: 22px;
      position: absolute;
      transition: all 0.25s;
      top: 35px;
    }
    &:hover {
      cursor: pointer;
      &:before {
        margin-left: 9px;
      }
      .menu-line {
        margin-left: 17px;
      }
    }
  }
  
  .menu-toggler {
    bottom: 35px;
    position: absolute;
    width: 70px;
    height: 70px;
    ${respondToMax.lg`
      right: 0;
      top: 0;
      bottom: auto;
    `}
  }
}` 
