/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, ReactPortal, useEffect, useState } from "react";
import "./Table.scss";
import NoData from "./NoData";
export interface TableColumn {
  title: string;
  key: string;
  width?: number | string;
  render?:() => void
}

export interface TableProps {
  columns: Array<TableColumn>;
  dataSources: Array<unknown>;
}
export default function Table(props: TableProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any>([]);
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newList: any[] = [];
    if (props.dataSources && props.dataSources.length) {
      props.dataSources.forEach((item) => {
        const childList: TableColumn[] = [];
        props.columns.forEach((child) => {
          childList.push(child);
        });
        newList.push({ ...item as TableColumn, children: childList });
      });
    }

    setList(newList);
    setLoaded(true)
  }, [props.columns, props.dataSources]);
  return (
    <div className="table-components-box w-100%">
      <table className="table-components w-100% text-left py-10px">
        <thead className="table-thead">
          <tr className="table-thead-tr">
            {props.columns.map((item, idx) => (
              <th
                key={`t-thead-row-${idx}`}
                className="fw-light font-size-12px px-10px py-8px color-#80838e"
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
                  console.log('child', child)
                  console.log('item', item)
                  return (<td
                    key={`t-body-row-${idx}-${i}`}
                    className="font-size-12px px-8px py-4px"
                  >
                    {typeof child.render === 'function' ? child.render(child): item[child.key]}
                  </td>)
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
      {!list.length && loaded && (
        <div className="w-100% flex justify-center items-center h-90%">
          <NoData />
        </div>
      )}
    </div>
  );
}
