import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductCard,
  FilterProducts,
  FilterProductsTitle,
} from '../components';

// Styles
import styles from '../components/Product/FilterProducts/FilterProducts.module.css';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import {
  Capitalize,
  Lowercase,
  useFetchProducts,
} from '../utilities';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const PopularPage: React.FC = () => {
  const [filter, setFilter] = React.useState<string | null>('left');
  let { title } = useParams();

  // Fetch products
  const data = useFetchProducts();

  let product = data?.Items.filter(
    (item) =>
      Lowercase(item.category?.title) == title && item.approved
  );

  // Filter products
  const handleFilter = (
    e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    setFilter(newFilter);
  };

  // Filter high price
  const priceHigh = 'price-high';
  filter === priceHigh &&
    product?.sort((c1, c2) => c2.price - c1.price);

  // Filter low price
  const priceLow = 'price-low';
  filter === priceLow &&
    product?.sort((c1, c2) => c1.price - c2.price);

  // Filter high popularity
  const popularityHigh = 'popularity-high';
  filter === popularityHigh &&
    product?.sort((c1, c2) => c2.popularity - c1.popularity);

  // Filter low popularity
  const popularityLow = 'popularity-low';
  filter === popularityLow &&
    product?.sort((c1, c2) => c1.popularity - c2.popularity);

  // Filter product types, and remove duplicates
  const types = [...new Set(product?.map((prod) => prod.type))];
  const typeItem = product?.filter((prod) => prod.type === filter);

  console.table(product);
  return (
    <div className="box">
      <div className="container--box">
        {/* Breadcrumbing */}
        <Breadcrumbs
          className="bread--box"
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">
            {Capitalize(title)}
          </Typography>
        </Breadcrumbs>
        {/* // Total amount of products */}
        {typeItem?.length === 0 ? (
          <p className="bread--box">
            {product?.length} products found.
          </p>
        ) : (
          // If subcategory is selected, display total items
          <p className="bread--box">
            {typeItem?.length} products found.
          </p>
        )}
      </div>
      <div className="container container--filter">
        <div className={styles.productContainer}>
          {/* // Filterlist */}
          <ul className={styles.productList}>
            <li>
              <FilterProducts
                title="Price"
                low={priceLow}
                icon={<MonetizationOnOutlinedIcon />}
                high={priceHigh}
                handleFilter={handleFilter}
                filter={filter}
              />
            </li>
            <li>
              <FilterProducts
                title="Popularity"
                low={popularityLow}
                icon={<LocalFireDepartmentOutlinedIcon />}
                high={popularityHigh}
                handleFilter={handleFilter}
                filter={filter}
              />
            </li>
            {/* // If there's more than 1 type, make filter component */}
            {types[1] && <p className="productFilterTitle">Types</p>}
            {types[1] &&
              types.map((type, i) => (
                <li key={i}>
                  <FilterProductsTitle
                    title={type.valueOf()}
                    handleFilter={handleFilter}
                    filter={filter}
                  />
                </li>
              ))}
          </ul>
        </div>
        {/* // Category description card */}
        <ul className="product-container">
          {/* // Productslist */}
          {typeItem?.length === 0
            ? product?.map((item, i) => (
                <ProductCard key={i} item={item} i={i} />
              ))
            : // If subcategory is selected, display items
              typeItem?.map((item, i) => (
                <ProductCard key={i} item={item} i={i} />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPage;
