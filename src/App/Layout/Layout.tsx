import React from 'react';

import './Layout.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <header className="header">{title}</header>
    <main className="appContainer">{children}</main>
    <footer className="footer">Footer</footer>
  </>
);

export default Layout;
