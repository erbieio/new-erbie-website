import ReactDOM from "react-dom/client";
import "./styles/antd.scss";
import "virtual:uno.css";
import "./index.css";
import "./styles/common.scss";
import './styles/animate.scss'
import { RouterProvider } from "react-router-dom";
import router from "./routes/Index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ConfigProvider, Space } from "antd";
import { ANTD_THEME } from "./const/antdTheme.ts";
import { EmptyConfig } from "./antd/config/config.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={ANTD_THEME} renderEmpty={EmptyConfig}>
    <Space>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Space>
  </ConfigProvider>
);
