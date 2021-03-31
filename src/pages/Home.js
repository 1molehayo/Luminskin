import React, { useContext, useEffect, useState } from 'react';
import { PageLayout } from 'layouts/PageContainer';
import { useQuery } from '@apollo/client';
import {
  Cart,
  ErrorModal,
  Loader,
  ProductCard,
  SelectComponent
} from 'components';
import { GET_PRODUCTS, GET_CURRENCY } from 'services/graphqlApis';
import { FILTER_BY } from 'utility/constants';
import { handleErrorMessage, isObjectEmpty } from 'utility';
import { CartContext } from 'contexts/CartContext';

const Home = () => {
  const { currency } = useContext(CartContext);

  const [filterByValue, setFilterByValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const currencies = useQuery(GET_CURRENCY);
  const products = useQuery(GET_PRODUCTS, { variables: { currency } });

  useEffect(() => {
    if (products.error || currencies.error) {
      handleErrorMessage(products.error || currencies.error).then((err) => {
        setErrorMsg(err);
      });
    }
  }, [currencies.error, products.error]);

  return (
    <PageLayout pageClass="home">
      {(products.loading || currencies.loading) && <Loader />}

      <ErrorModal
        buttonText="Home"
        closeModal={null}
        handleError={() => {
          localStorage.setItem('currency', 'USD');
          window.location.reload();
        }}
        showModal={products.error || currencies.error}
        title="Error"
        message={errorMsg}
      />

      <section className="section container-fluid p-0">
        <div className="home-hero">
          <div className="hero-wrapper">
            <div className="hero--left">
              <h3 className="heading">All Products</h3>
              <p className="paragraph mb-0">A 360° look at Lumin</p>
            </div>

            <div className="hero--right">
              <SelectComponent
                id="filter"
                placeholder="Filter By"
                options={FILTER_BY}
                onChange={(e) => setFilterByValue(e.target.value)}
                value={filterByValue}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section products p-0">
        <div className="container-fluid products-wrapper">
          <div className="row no-gutters">
            {products &&
              !isObjectEmpty(products.data) &&
              products.data.products.map((productItem, index) => (
                <ProductCard key={index} product={productItem} />
              ))}
          </div>
        </div>
      </section>

      <Cart
        currencyList={
          currencies && !isObjectEmpty(currencies.data)
            ? currencies.data.currency
            : []
        }
        products={
          products && !isObjectEmpty(products.data)
            ? products.data.products
            : []
        }
      />
    </PageLayout>
  );
};

export default Home;
