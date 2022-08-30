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
    component: ComponentCreator('/', '197'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---basics',
        component: ComponentCreator('/category/tutorial---basics', '72e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---extras',
        component: ComponentCreator('/category/tutorial---extras', '3d7'),
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
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions', '975'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site', 'ac7'),
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
