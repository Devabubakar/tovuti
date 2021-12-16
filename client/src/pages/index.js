import * as React from 'react';


import Layout from '../components/layout';
import Seo from '../components/seo';

import Hero from '../components/hero';
import List from '../components/list';
import { useBlogData } from '../hooks/useBlogData';
import Blogs from '../components/blogs';

const IndexPage = () => {
  const blogs = useBlogData();

  return (
    <Layout>
      <Seo title='Home' />
      <Hero blogs={blogs} />
      <List blogs={blogs} />
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default IndexPage;
