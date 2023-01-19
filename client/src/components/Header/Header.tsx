import { Button, Link } from '@mui/material';
import React from 'react';
import { ROUTES } from '../../constants/routes';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerIMG}></div>
        <div className={styles.headerTop}>
          <div className={styles.headerLogo}>
            <a href={ROUTES.LANDING}>
              <div className={styles.headerLogoIMG}>Verldopia</div>
            </a>
          </div>
          <div className={styles.headerBtns}>
            <a id="step-3" className={styles.btn} href={ROUTES.ABOUT}>
              About
            </a>
            <a className={styles.btn} href={ROUTES.LOGIN}>
              Login
            </a>
            <a className={styles.btn} href={ROUTES.REGISTER}>
              Register
            </a>
          </div>
        </div>
        <div className={styles.headerTextBox}>
          <h1 className="h1">
            Quality firewood, grown in an Estonian forest.
          </h1>
          <Button
            id="step-2"
            variant="outlined"
            sx={{
              color: 'var(--bgd-color)',
              border: '1px solid var(--dark-grey)',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                border: '1px solid var(--dark-grey)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            <Link
              href="products"
              underline="none"
              sx={{
                color: 'var(--darkest-grey)',
              }}
            >
              Browse products
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
