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
import TestPageDorr from 'pages/testPages/TestPageDorr';
import PointChargePage from 'pages/PointChargePage';
import NotFoundPage from './pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route
            path="recruit/:ottServiceId"
            element={<RecrutingPartyPage />}
          />
          <Route path="create" element={<CreatePartyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<MyPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="charge" element={<PointChargePage />} />
          <Route path="oauth/redirect" element={<OauthRedirectPage />} />
          <Route path="myParty/:myPartyId" element={<MyPartyDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/test" element={<TestPageDorr />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
