import React from "react";
import PropTypes from "prop-types";
import ThemeToggler from '../ThemeToggler';
import Anchor from '../../atoms/Anchor';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledHeader } from './Header.style';

const Header = ({theme, themeToggler, className}) => {
  
  return (
    <StyledHeader>
      <div className="header-logo">
        {/* <Anchor>
          <img src="/assets/logo-removebg.png"/>
        </Anchor> */}
      </div>
      <div className="menu-toggler">
        <div className="all-loaded" id="toggle">
          <div className="menu-line"></div>
        </div>
      </div>
      {/* <div className="row end-xs col-xs-12 col-lg-10">
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      </div> */}
    </StyledHeader>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default withStyles(Header, styles);

export { Header as HeaderVanilla };