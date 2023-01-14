import React from 'react';
import { ROUTES } from '../constants';

export interface IAboutPageProps {}

const AboutPage: React.FC<IAboutPageProps> = (props) => {
  return (
    <div>
      <p>Order was successful!</p>
      <br />
      <a href={ROUTES.LANDING} className="bold">
        Return to the store.
      </a>
    </div>
  );
};

export default AboutPage;
