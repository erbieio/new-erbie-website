/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";

import App from "../App.tsx";
import LazyLoad from "./LazyLoad.tsx";
import { lazy } from "react";
import Home from "../views/Home/Home.tsx";
import Docs from "../views/Docs/Docs.tsx";
import Partners from '../views/Partners/Partners.tsx'
import Explorer from "../views/Explorer/Explorer.tsx";
import ExplorerHome from "../views/Explorer/Pages/Home/Home.tsx";
import Infrastructure from "../views/Infrastructure/Infrastructure.tsx";
import Wallet from "../views/Wallet/Wallet.tsx";

const Error = lazy(() => import("../views/Error/Error.tsx"));
// const Wallet = lazy(() => import("../views/Wallet/Wallet.tsx"));
const Chain = lazy(() => import("../views/Explorer/Pages/Chain/Chain.tsx"));
const Builder = lazy(
  () => import("../views/Explorer/Pages/Builder/Builder.tsx")
);
const Csbt = lazy(() => import("../views/Explorer/Pages/Csbt/Csbt.tsx"));
const Token = lazy(() => import("../views/Explorer/Pages/Token/Token.tsx"));
const Account = lazy(
  () => import("../views/Explorer/Pages/Account/Account.tsx")
);
const Transct = lazy(
  () => import("../views/Explorer/Pages/Transct/Transct.tsx")
);
const AccountDetail = lazy(
  () => import("../views/Explorer/Pages/AccountDetail/AccountDetail.tsx")
);
const BlockDetail = lazy(
  () => import("../views/Explorer/Pages/BlockDetail/BlockDetail.tsx")
);
const TxDetail = lazy(
  () => import("../views/Explorer/Pages/TxDetail/TxDetail.tsx")
);
const TokenDetail = lazy(
  () => import("../views/Explorer/Pages/Token/TokenDetail.tsx")
);
const PrivacyPolicy = lazy(() => import("../views/Agreement/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../views/Agreement/TermsOfUse"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: LazyLoad(Error),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/infrastructure",
        element: <Infrastructure />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/explorer",
        element: <Explorer />,
        children: [
          {
            path: "/explorer",
            element: <ExplorerHome />,
          },
          {
            path: "/explorer/chain",
            element: LazyLoad(Chain),
          },
          {
            path: "/explorer/builder",
            element: LazyLoad(Builder),
          },
          {
            path: "/explorer/csbt",
            element: LazyLoad(Csbt),
          },
          {
            path: "/explorer/token",
            element: LazyLoad(Token),
          },
          {
            path: "/explorer/token/:tokenAddress",
            element: LazyLoad(TokenDetail),
          },
          {
            path: "/explorer/account",
            element: LazyLoad(Account),
          },
          {
            path: "/explorer/transct",
            element: LazyLoad(Transct),
          },
          {
            path: "/explorer/address/:address",
            element: LazyLoad(AccountDetail),
          },
          {
            path: "/explorer/block/:blockNumber",
            element: LazyLoad(BlockDetail),
          },
          {
            path: "/explorer/tx/:txhash",
            element: LazyLoad(TxDetail),
          },
        ],
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/PrivacyPolicy",
        element: LazyLoad(PrivacyPolicy),
      },
      {
        path: "/TermsOfUse",
        element: LazyLoad(TermsOfUse),
      },
    ],
  },
]);

export default router;
