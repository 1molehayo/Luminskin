import React from 'react';
import { PageLayout } from 'layouts/PageContainer';

const Home = () => {
  return (
    <PageLayout pageClass="page">
      <section className="section">
        <div className="container">
          <h3 className="heading">Home</h3>
          <p className="paragraph">This is a home page</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
