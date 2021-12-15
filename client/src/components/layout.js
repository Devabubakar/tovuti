/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '@mui/material/Container';

import Header from './header';
import './layout.css';
import Footer from './footer';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <Box sx={{ flexShrink: 1 }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Container>{children}</Container>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
