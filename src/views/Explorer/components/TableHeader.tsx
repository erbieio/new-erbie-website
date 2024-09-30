import { Pagination, PaginationProps } from "antd";
import { getSystemInfo } from "../../../utils/system";
import { MutableRefObject, ReactNode, useRef } from "react";
export interface TableHeaderProps {
  params: MutableRefObject<{
    page: number;
    page_size: number;
  }>;
  titlePC?: ReactNode;
  titleH5?: ReactNode;
  title?: ReactNode;
  onChange: PaginationProps["onChange"];
  total: number;
}
const TableHeader = (props: TableHeaderProps) => {
  const systemInfo = getSystemInfo();
  useRef();

  return (
    <div className="font-size-16px text-left py-10px px-10px lg:px-16px tit items-center justify-between flex flex-row lg:flex-row lg:h-6.4vh">
      {props.title ? (
        <div className="font-size-12px font-size-16px hidden lg:block">
          {props.title}
        </div>
      ) : (
        <div>
          <div className="font-size-12px font-size-16px hidden lg:block">
            {props.titlePC}
          </div>
          <div className="font-size-12px font-size-16px block lg:hidden">
            {props.titleH5}
          </div>
        </div>
      )}
      <div>
        <Pagination
          onChange={props.onChange}
          current={props.params.current.page}
          pageSize={props.params.current.page_size}
          showQuickJumper={systemInfo.isMobile ? true : false}
          simple={systemInfo.isMobile ? true : false}
          total={props.total}
        />
      </div>
    </div>
  );
};

export default TableHeader;
