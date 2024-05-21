import { Suspense } from "react";
import { Spin } from "antd";
// 懒加载组件
const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
      <Suspense fallback={<><Spin /></>}>
        <Component />
      </Suspense>
    );
  };

  export default LazyLoad