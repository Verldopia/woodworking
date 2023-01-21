import React from 'react';
import { useParams } from 'react-router-dom';
import {
  AddToCart,
  Descriptinator,
  ImageModal,
  RelatedProduct,
} from '../components';

// Styles
import {
  Alert,
  Breadcrumbs,
  Button,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  FormatCurrency,
  Lowercase,
  SlugifyID,
  useFetchProducts,
} from '../utilities';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ItemPage: React.FC = (props) => {
  let { id, title } = useParams();

  // Fetch products
  const data = useFetchProducts();

  // Find product by ID
  const product = data?.Items.find(
    (item) => item.id === SlugifyID(id)
  );

  // When product ID is found, disable button
  let disabled = false;
  if (localStorage.wishlist) {
    let finder = JSON.parse(localStorage.wishlist);
    const found = finder.find((item: number) => item === product?.id);
    if (found) {
      disabled = true;
    }
  }

  // Set items to localStorage when clicked on wishlist
  function handleWishlist() {
    // Get localStorage and push clicked product ID to array
    let wishlist = JSON.parse(
      localStorage.getItem('wishlist') ?? '[]'
    );
    wishlist.push(product?.id);

    // Remove duplicates and set to localStorage
    localStorage.setItem(
      'wishlist',
      JSON.stringify([...new Set(wishlist)])
    );

    // Disable button, and reload
    disabled = true;
    window.location.reload();
  }

  return (
    <div className="container--box">
      {product && (
        <div className="container">
          {/* // Breadcrumbing */}
          <Breadcrumbs
            className="bread--box"
            separator="›"
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={
                '/categories/' + Lowercase(product.category?.title)
              }
            >
              {product.category?.title}
            </Link>
            <Typography color="text.primary">
              {product.title}
            </Typography>
          </Breadcrumbs>

          {!product.approved && (
            <Alert severity="error" className="margin">
              The product is not visible in the webstore until it is
              approved!
            </Alert>
          )}
          <div className="container--info">
            <div className="container--info__images images">
              <ImageModal
                src={product.mainImage}
                alt={product.title}
              />
            </div>
            <div className="container--info__params">
              <h1>{product.title}</h1>
              <p>Currently {product.stock} in stock.</p>
              <p>{FormatCurrency(product.price)}</p>

              <div className="button">
                <AddToCart item={product} />
              </div>

              <Button
                className="mainBtn"
                color="info"
                variant="outlined"
                onClick={handleWishlist}
                disabled={disabled}
              >
                {disabled ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <Tooltip
                    title="Add item to wishlist"
                    arrow
                    placement="bottom"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </Tooltip>
                )}
              </Button>
            </div>
            <div className="container--info__text">
              <h3>About the {product.title}</h3>
              <Descriptinator text={product.description} />
            </div>
          </div>
        </div>
      )}

      {/* // Select 4 products in same category, and create a card */}
      <RelatedProduct
        id={SlugifyID(id)}
        title={title}
        titleText="Related products"
        data={data}
      />
    </div>
  );
};

export default ItemPage;
