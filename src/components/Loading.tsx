import { Spin } from "antd";
import { ReactNode } from "react";
import './Loading.scss'
export interface LoadingProps {
  loading: boolean
  children: ReactNode
}
export default function Loading(props: LoadingProps) {

  return (
    <div className="w-100% h-100% loading-component">
        <Spin spinning={props.loading}>
          {props.children}
        </Spin>
    </div>
  );
}
