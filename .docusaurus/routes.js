import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wlc-starter/markdown-page',
    component: ComponentCreator('/wlc-starter/markdown-page', '61d'),
    exact: true
  },
  {
    path: '/wlc-starter/',
    component: ComponentCreator('/wlc-starter/', 'f61'),
    routes: [
      {
        path: '/wlc-starter/',
        component: ComponentCreator('/wlc-starter/', '49e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/files-and-folders',
        component: ComponentCreator('/wlc-starter/files-and-folders', 'c7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/functionalities',
        component: ComponentCreator('/wlc-starter/functionalities', 'bef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/gutenberg-blocks',
        component: ComponentCreator('/wlc-starter/gutenberg-blocks', '75b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/loading-block-classes-and-views',
        component: ComponentCreator('/wlc-starter/loading-block-classes-and-views', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/theme-hooks',
        component: ComponentCreator('/wlc-starter/theme-hooks', 'f05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/view-class-block-class',
        component: ComponentCreator('/wlc-starter/view-class-block-class', 'e8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wlc-starter/views-for-pages',
        component: ComponentCreator('/wlc-starter/views-for-pages', 'dfd'),
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
