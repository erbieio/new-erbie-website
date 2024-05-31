/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, ReactPortal, useEffect, useState } from "react";
import "./Table.scss";
import NoData from "./NoData";
import Loading from "./Loading";
export interface TableColumn {
  title: string | ReactNode;
  key: string;
  width?: number | string;
  render?: (val: unknown) => void;
}

export interface TableProps {
  columns: Array<TableColumn>;
  dataSources: Array<unknown>;
  loading: boolean;
}
export default function Table(props: TableProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newList: any[] = [];
    if (props.dataSources && props.dataSources.length) {
      props.dataSources.forEach((item) => {
        const childList: TableColumn[] = [];
        props.columns.forEach((child) => {
          childList.push(child);
        });
        newList.push({ ...(item as TableColumn), children: childList });
      });
    }
    setList(newList);
  }, [props.columns, props.dataSources]);

  useEffect(() => {
    if (props.loading) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [props.loading]);
  return (
    <div className="table-components-box w-100% h-100% min-h-30vh">
      <div className="h-100%">
        <Loading loading={props.loading}>
          <table className="table-components w-100% text-left py-10px">
            <thead className="table-thead">
              <tr className="table-thead-tr">
                {props.columns.map((item, idx) => (
                  <th
                    key={`t-thead-row-${idx}`}
                    className="fw-light font-size-12px px-10px py-8px color-#80838e  text-center"
                    style={{ width: (item.width || 0) + "px" }}
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table-tbody">
              {list.map(
                (
                  item: {
                    [x: string]:
                      | string
                      | number
                      | boolean
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    children: any[];
                  },
                  idx: any
                ) => (
                  <tr className="table-tbody-tr h-24px" key={idx}>
                    {item.children.map((child, i) => {
                      return (
                        <td
                          key={`t-body-row-${idx}-${i}`}
                          className="font-size-12px px-8px py-4px text-center"
                        >
                          {typeof child.render === "function"
                            ? child.render(item)
                            : item[child.key]}
                        </td>
                      );
                    })}
                  </tr>
                )
              )}
            </tbody>
          </table>
          {!list.length && loaded && (
            <div className="flex justify-center items-center h-100% min-h-48vh w-100%">
              <NoData />
            </div>
          )}
        </Loading>
      </div>
    </div>
  );
}
