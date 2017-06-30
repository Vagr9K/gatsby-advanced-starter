import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { browserHistory } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const NavList = [{
  divider: false,
  subheader: false,
  primaryText: 'Home',
  leftIcon: <FontIcon>home</FontIcon>,
  onClick: () => browserHistory.push(prefixLink('/')),
}, {
  divider: false,
  subheader: false,
  primaryText: 'Tags',
  leftIcon: <FontIcon>label</FontIcon>,
  onClick: () => browserHistory.push(prefixLink('/tags/')),
}, {
  divider: false,
  subheader: false,
  primaryText: 'About',
  leftIcon: <FontIcon>face</FontIcon>,
  onClick: () => browserHistory.push(prefixLink('/about/')),
}, {
  divider: true,
},
];

export default NavList;
