import React from 'react'
import { func, string } from 'prop-types';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { Button } from './ThemeToggler.style';
import { isMobile } from '../../../util';

const ThemeToggler = ({theme,  toggleTheme }) => {
    return (
        <div className={`row end-xs col-xs-2 col-lg-1 ${isMobile() && 'col-xs-offset-1'}`}>
            <Button onClick={toggleTheme} >
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            </Button>
        </div>
    );
};

ThemeToggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default withStyles(ThemeToggler, styles);

export { ThemeToggler as ThemeTogglerVanilla };
