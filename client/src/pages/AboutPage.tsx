import React from 'react';
import { ROUTES } from '../constants';

export interface IAboutPageProps {}

const AboutPage: React.FC<IAboutPageProps> = (props) => {
  return (
    <div>
      <a href={ROUTES.LANDING} className="bold">
        Return to the store.
      </a>
    </div>
  );
};

export default AboutPage;
