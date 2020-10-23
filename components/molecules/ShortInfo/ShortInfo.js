import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Anchor from '../../atoms/Anchor';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledShortInfo } from './ShortInfo.style';
import { isMobile } from '../../../util/index';

const ShortInfo = () => {
  const logoRef = useRef(null);
  const scrollTo = 120
  
  useEffect(() => {
    let perScroll = 0;
    const logoHeight = logoRef.current.clientHeight || 213;
    console.log("ShortInfo -> logoHeight", logoHeight)
    
    const handleScroll = () => {
      perScroll = !isMobile() ? window.scrollX / scrollTo : ((window.scrollY / 1) * 100);
      if (perScroll > 1) {
        perScroll = 1;
      }
      
      let logoPos = (-1 * (perScroll * 20) + 20);
      console.log("handleScroll -> logoPos", logoPos)
      let logoSize = ((100 * perScroll) - (logoHeight * perScroll) + logoHeight);
      
      logoRef.current.style.top = logoPos + "%";
      logoRef.current.style.left = logoPos + "%";
      logoRef.current.style.height =  logoSize + 'px';
      logoRef.current.style.transform = "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)";
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <StyledShortInfo className="row col-xs-12 col-lg-4">
      <Anchor>
        <img src="/assets/logo-removebg.png" ref={logoRef} />
      </Anchor>
      <div className="short-desc"> 
        <p>Front End Developer</p>
        <p>Passionate front-end web developer with 3 years of experience using JavaScript, HTML5, and CSS to build all aspects of the user experience and user interface for client-facing landing pages. Specializes in using jQuery and AngularJS to build e-commerce sites.</p>
      </div>
    </StyledShortInfo>
  )
};

ShortInfo.propTypes = {};

ShortInfo.defaultProps = {};

export default withStyles(ShortInfo, styles);

export { ShortInfo as ShortInfoVanilla };