import React, { useState, useEffect } from 'react';
import ShortInfo from '../../molecules/ShortInfo';
import { isMobile } from '../../../util/index';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';

const HomePage = () => {
  if (!isMobile()) {
    useHorizontal();
  }
  
  useEffect(() => {
  }, []);
  
  const block = {
    minWidth: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '32px',

    background: '#013dff',
    color: '#fff',
}

const flex = isMobile() ? {display: 'block'} : {display: 'flex'};
  
  return (
    <div style={flex}>
    <ShortInfo/>
    <div style={block}>Hello, scroll further</div>

            <div style={block}>Why hello there</div>

            <div style={block}>
                <a href="react.html">Whee</a>
            </div>
            </div>
  )
}
 
export default HomePage;