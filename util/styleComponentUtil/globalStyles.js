import { createGlobalStyle} from "styled-components"
import modernNormalize from "@styled/modern-normalize";


export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; */
    background: #0B0633;
    color: #F5F4F4;
    /* overflow-x: scroll;
    overflow-y: hidden; */
    font-family: 'Nanum Gothic Coding', monospace !important;
    font-size: 14px;
    font-size: .875rem;
    /* height: 100vw;
    width:100vh;
    position: absolute; */
  /* transform: rotate(270deg) translateX(-100%); */
  /* transform-origin: top left;
    transition: all 0.50s linear; */
  }
  
  @media only screen and (max-width : 640px) {
    .is-mobile {
      display: none;
    }
  }
  
  .heading1 {
    font-family: 'Nanum Gothic Coding', monospace !important;
    font-weight: 900;
    font-size: 7rem;
  }
  
  
  /* ${modernNormalize}
  
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${100}ms, transform ${100}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${100}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${100}ms;
  } */
  `
