import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [{
    primaryText: 'Home',
    leftIcon: <FontIcon>home</FontIcon>,
    component: Link,
    to: '/',
  }, {
    divider: true,
  },
  ];

  if (config.userLinks) {
    config.userLinks.forEach((link) => {
      NavList.push(
        {
          primaryText: link.label,
          leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
          component: 'a',
          href: link.url,
        },
      );
    });
  }

  NavList.push({ divider: true });

  NavList.push(
    {
      primaryText: 'About',
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: '/about/',
    },
  );
  return NavList;
}
export default GetNavList;

