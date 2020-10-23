import styled, { css } from "styled-components";
import { respondToMax, respondToMin } from '../../../util/styleComponentUtil/_mixin';

export default css``;

export const StyledShortInfo = styled.article`{
    width: auto;
    margin-left: 100px;
    margin-right: 100px;
    height: 100vh;
    margin-top: 10px;
    
    ${respondToMax.sm`
      margin-left: 0;
      margin-right: 0;
      display: flex;
      justify-content: center;
    `}
    
    img {
      max-width: 100%;
      height: 213px;
      position: fixed;
      top: 20%;
      left: 20%;
      transform: translate3d(-20%, -20%, 0px);
    }
    
    .short-desc {
      p {
        font-size: 20px;
        line-height: 1.5;
        &:first-child {
          margin-bottom: 20px;
          margin-top: 70px;
          line-height: normal;
        }
      }
      ${respondToMin.lg`
        position: relative;
        left: 20%;
      `}
    }
}` 
