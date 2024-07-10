import { Suspense } from "react";
import { Spin } from "antd";
// 懒加载组件
const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense
      fallback={
        <div className="h-100% w=100% flex justify-center items-center">
          <Spin />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
