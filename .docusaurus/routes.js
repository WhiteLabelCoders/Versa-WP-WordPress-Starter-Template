import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '231'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '6b7'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/files-and-folders',
        component: ComponentCreator('/files-and-folders', '529'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/functionalities',
        component: ComponentCreator('/functionalities', 'd60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gutenberg-blocks',
        component: ComponentCreator('/gutenberg-blocks', '1ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/loading-block-classes-and-views',
        component: ComponentCreator('/loading-block-classes-and-views', '474'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/theme-hooks',
        component: ComponentCreator('/theme-hooks', 'd8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/view-class-block-class',
        component: ComponentCreator('/view-class-block-class', '3ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/views-for-pages',
        component: ComponentCreator('/views-for-pages', '33e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
