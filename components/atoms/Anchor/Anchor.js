/**
 * Anchor component to handle all the click events
 * @module Anchor
 */
import Link from 'next/link';
import type from 'react';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles from './Anchor.style';

const Anchor = props => {
  const {
    children,
    to,
    as,
    className,
    noLink,
    inheritedStyles,
    handleLinkClick,
    shallow,
    scroll,
    forceClick,
    hoverAnimation,
    viewmorebutton,
    target,
    ref,
    ...other
  } = props;

  return (
    <Link href={to} as={as} shallow={shallow} scroll={scroll} ref={ref}>
      {forceClick ? (
        <a
          className={`${className} ${hoverAnimation ? 'hover-animation' : ''}`}
          onClick={handleLinkClick}
          target={target}
          rel={target ? 'noopener' : null}
          {...other}>
          {children}
        </a>
      ) : (
        <a
          className={`${className}`}
          {...other}>
          {children}
        </a>
      )}
    </Link>
  );
};

Anchor.defaultProps = {
  noLink: false,
  to: '',
  as: '',
  inheritedStyles: '',
  shallow: false,
  scroll: true,
  forceClick: false,
  handleLinkClick: 'function',
  viewmorebutton: 'true',
};

export default withStyles(Anchor, styles);

export { Anchor as AnchorVanilla };