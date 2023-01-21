import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Pages
import {
  LandingPage,
  ContactPage,
  CheckOutPage,
  WishlistPage,
  AboutPage,
  CategoriesPage,
  ItemPage,
  LoginPage,
  RegisterPage,
  ResultsPage,
  OrderPage,
  FaqPage,
  ShippingPage,
  LegalPage,
} from './pages';
import {
  AdminLoginPage,
  AdminLivePage,
  AdminOrdersPage,
  AdminContentPage,
  AdminContentApprovalPage,
  AdminStockPage,
  AdminShippingPage,
  AdminPaymentsPage,
  AdminDiscountPage,
  AdminCustomersPage,
} from './pages/Admin';

// Layouts
import AdminLayout from './components/.layouts/AdminLayout';
import BaseLayout from './components/.layouts/BaseLayout';
import FormLayout from './components/.layouts/FormLayout';

// Styles
import './assets/css/reset.css';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        {/* Admin login layout */}
        <Route element={<FormLayout />}>
          <Route
            path={ROUTES.ADMINLogin}
            element={<AdminLoginPage />}
          />
        </Route>

        {/* Admin layout */}
        <Route element={<AdminLayout />}>
          <Route
            path={ROUTES.ADMINLive}
            element={<AdminLivePage />}
          />
          <Route
            path={ROUTES.ADMINAdministration}
            element={<AdminOrdersPage />}
          />
          <Route
            path={ROUTES.ADMINContent}
            element={<AdminContentPage />}
          />
          <Route
            path={ROUTES.ADMINContentApproval}
            element={<AdminContentApprovalPage />}
          />
          <Route
            path={ROUTES.ADMINStock}
            element={<AdminStockPage />}
          />
          <Route
            path={ROUTES.ADMINShipping}
            element={<AdminShippingPage />}
          />
          <Route
            path={ROUTES.ADMINPayments}
            element={<AdminPaymentsPage />}
          />
          <Route
            path={ROUTES.ADMINDiscount}
            element={<AdminDiscountPage />}
          />
          <Route
            path={ROUTES.ADMINCustomers}
            element={<AdminCustomersPage />}
          />
        </Route>

        {/* User layout */}
        <Route element={<BaseLayout />}>
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.RESULTS} element={<ResultsPage />} />
          <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
          <Route path={ROUTES.ITEMS} element={<ItemPage />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckOutPage />} />
          <Route path={ROUTES.ORDERED} element={<OrderPage />} />
          <Route path={ROUTES.SHIPPING} element={<ShippingPage />} />
          <Route path={ROUTES.FAQ} element={<FaqPage />} />
          <Route path={ROUTES.LEGAL} element={<LegalPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route
            path={ROUTES.CATEGORIES}
            element={<CategoriesPage />}
          />
          <Route element={<FormLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
              path={ROUTES.REGISTER}
              element={<RegisterPage />}
            />
          </Route>
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
