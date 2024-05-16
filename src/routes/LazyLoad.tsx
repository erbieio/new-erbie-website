import { Suspense } from "react";
import Loading from "../components/Loading";
// 懒加载组件
const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
      <Suspense fallback={<><Loading /></>}>
        <Component />
      </Suspense>
    );
  };

  export default LazyLoad