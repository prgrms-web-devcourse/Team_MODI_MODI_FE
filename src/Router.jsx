import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import RecrutingPartyPage from 'pages/RecrutingPartyPage';
import CreatePartyPage from 'pages/CreatePartyPage';
import LoginPage from 'pages/LoginPage';
import MyPage from 'pages/MyPage';
import PaymentPage from 'pages/PaymentPage';
import OauthRedirectPage from 'pages/OauthRedirectPage';
import MyPartyDetailPage from 'pages/MyPartyDetailPage';
import MainPage from 'pages/MainPage';
import PointChargePage from 'pages/PointChargePage';
import PrivateRoute from 'utils/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route
            path="recruit/:ottServiceId"
            element={<RecrutingPartyPage />}
          />
          <Route
            path="create"
            element={
              <PrivateRoute>
                <CreatePartyPage />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route path="payment" element={<PaymentPage />} />
          <Route
            path="charge"
            element={
              <PrivateRoute>
                <PointChargePage />
              </PrivateRoute>
            }
          />
          <Route path="oauth/redirect" element={<OauthRedirectPage />} />
          <Route
            path="myParty/:myPartyId"
            element={
              <PrivateRoute>
                <MyPartyDetailPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
