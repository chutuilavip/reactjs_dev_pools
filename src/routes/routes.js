import React from 'react';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';

const TermsAndServices = React.lazy(() => import('../pages/TermsAndServices/TermsAndServices'));
const NftGame = React.lazy(() => import('../pages/NFTGame/NFTGame'));
const Metaverse = React.lazy(() => import('../pages/Metaverse/Metaverse'));
const PlayToEarn = React.lazy(() => import('../pages/PlayToEarn/PlayToEarn'));
const Service = React.lazy(() => import('../pages/Service/Service'));
const Account = React.lazy(() => import('../pages/Account/Account'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const Register = React.lazy(() => import('../pages/Register/Register'));
const Detail = React.lazy(() => import('../pages/Detail/Detail'));
const Friends = React.lazy(() => import('../pages/Friends/Friends'));
const MostPlayed = React.lazy(() => import('../pages/MostPlayed/MostPlayed'));
const PlayStore = React.lazy(() => import('../pages/Store/Store'));
const Library = React.lazy(() => import('../pages/Library/Library'));
const Upload = React.lazy(() => import('../pages/UploadForPublishers/UploadForPublisher'));
// const EditApp = React.lazy(() =>
//   import("../components/TermsAndServices/Upload/EditApp/EditApp")
// );
const EditApp = React.lazy(() => import('../pages/EditApp/EditAppAPI'));
const ProfitForUser = React.lazy(() => import('../pages/ProfitUser/ProfitUser'));
const ResultSearch = React.lazy(() => import('../pages/ResultSearch/ResultSearch'));
const Statistics = React.lazy(() => import('../pages/Statistics/Statistic'));
const ListCreatedApp = React.lazy(() =>
  import('../components/Account/ListAppCreated/ListAppCreated')
);
const MyServices = React.lazy(() => import('../pages/MyServices/MyServices'));
export const publicRoutes = [
  { path: '/nft-game', component: NftGame },
  { path: '/metaverse', component: Metaverse },
  { path: '/play-to-earn', component: PlayToEarn },
  { path: '/service', component: Service },

  { path: '/playstore', component: PlayStore },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/detail/:slug', component: Detail },
  { path: '/most-played', component: MostPlayed },
  { path: '/library', component: Library },
  { path: '/profit-for-user', component: ProfitForUser },
  { path: '/search', component: ResultSearch },
  { path: '/forgot-password/*', component: ForgotPassword },
  { path: '/reset-password', component: ResetPassword },
];

export const PrivateRouter = [
  { path: '/terms-and-services/:tabs', component: TermsAndServices },
  { path: '/terms-and-services', component: TermsAndServices },
  { path: '/account/*', component: Account },
  { path: '/friends', component: Friends },
  // { path: "/for-publishers/edit-app/:slug", component: EditApp },
  { path: '/for-publishers/edit-app/:slug', component: EditApp },
  { path: '/for-publishers/:option', component: Upload },
  { path: '/for-publishers/created-app', component: ListCreatedApp },
  { path: '/for-publishers/created-app/history-update/:id', component: ListCreatedApp },
  { path: '/for-publishers/created-app/:appId', component: ListCreatedApp },
  { path: '/for-publishers/my-services', component: MyServices },
  { path: '/statistics', component: Statistics },
];
