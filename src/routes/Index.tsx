/* eslint-disable react-refresh/only-export-components */


import { createBrowserRouter } from "react-router-dom";

import App from  '../App.tsx';
import LazyLoad from "./LazyLoad.tsx";
import { lazy } from "react";
import Home from "../views/Home/Home.tsx";
import Docs from "../views/Docs/Docs.tsx";
import Explorer from "../views/Explorer/Explorer.tsx";
import ExplorerHome from '../views/Explorer/Pages/Home/Home.tsx'
import Infrastructure from '../views/Infrastructure/Infrastructure.tsx'
import Wallet from "../views/Wallet/Wallet.tsx";
const Error = lazy(() => import("../views/Error/Error.tsx"));
// const Wallet = lazy(() => import("../views/Wallet/Wallet.tsx"));
const Chain = lazy(() => import('../views/Explorer/Pages/Chain/Chain.tsx'))
const Validator = lazy(() => import('../views/Explorer/Pages/Validator/Validator.tsx'))
const Staker = lazy(() => import('../views/Explorer/Pages/Staker/Staker.tsx'))
const Csbt = lazy(() => import('../views/Explorer/Pages/Csbt/Csbt.tsx'))
const Asset = lazy(() => import('../views/Explorer/Pages/Asset/Asset.tsx'))
const Account = lazy(() => import('../views/Explorer/Pages/Account/Account.tsx'))
const Transct = lazy(() => import('../views/Explorer/Pages/Transct/Transct.tsx'))

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: LazyLoad(Error),
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/infrastructure',
          element: <Infrastructure/>
        },
        {
            path: '/docs',
            element: <Docs />
        },
        {
            path: '/explorer',
            element: <Explorer />,
            children: [
              {
                path: '/explorer/home',
                element: <ExplorerHome />,
              },
              {
                path: '/explorer/chain',
                element: LazyLoad(Chain),
              },
              {
                path: '/explorer/validator',
                element: LazyLoad(Validator),
              },
              {
                path: '/explorer/staker',
                element: LazyLoad(Staker),
              },
              {
                path: '/explorer/csbt',
                element: LazyLoad(Csbt),
              },
              {
                path: '/explorer/asset',
                element: LazyLoad(Asset),
              },
              {
                path: '/explorer/account',
                element: LazyLoad(Account),
              },
              {
                path: '/explorer/transct',
                element: LazyLoad(Transct),
              },
            ]
        },
        {
            path: '/wallet',
            element: <Wallet />
        },
      ]
    },

  ]);

export default router;
