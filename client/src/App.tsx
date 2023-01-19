import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Layouts
import { BaseLayout } from './components/.Layouts';

// Styles
import './assets/css/reset.css';
import './App.css';

// Pages
import { LandingPage, AboutPage } from './pages';

function App() {
  return (
    <Routes>
      {/* User layout */}
      <Route element={<BaseLayout />}>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        {/* <Route path={ROUTES.ITEMS} element={<ItemPage />} /> */}
        {/* <Route path={ROUTES.CHECKOUT} element={<CheckOutPage />} /> */}
        {/* <Route path={ROUTES.ORDERED} element={<OrderPage />} /> */}
        {/* <Route path={ROUTES.SHIPPING} element={<ShippingPage />} /> */}
        {/* <Route path={ROUTES.LEGAL} element={<LegalPage />} /> */}
        {/* <Route path={ROUTES.CONTACT} element={<ContactPage />} /> */}

        {/* <Route element={<FormLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
