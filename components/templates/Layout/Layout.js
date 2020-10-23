import React, { useState, useEffect } from 'react';
import Header from '../../organisms/Header';
// import useHorizontal from '@oberon-amsterdam/horizontal/hook';

// Theming
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../../../util/styleComponentUtil/Themes";
import  {useDarkMode} from "../../../util/useDarkMode";
import { isBrowser } from '../../../util/index';


const Layout = ({ children, className }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [container, setContainer] = useState();
  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  // useHorizontal();
  // useEffect(() => {
  //   new HorizontalScroll();
  // }, []);
  
if(!mountedComponent) return <div/>
return (
  <ThemeProvider theme={themeMode}>
    <Header theme={theme} themeToggler={themeToggler} />
    <main className={`${className  || ''}`} ref={ref => {
                    setContainer(ref);
                }}>
      <div className="">
        {children}
      </div>
    </main>
  </ThemeProvider>
)};

export default Layout;