import { useEffect, useState } from "react";

export interface PageNationProps {
  total: number;
  page: number;
  pageSize: number;
  maxBtnLength?: number;
  change?: (page: number) => void;
  next?: () => void;
  prev?: () => void;
}
interface PageNationItem {
  index: number | null;
  label: string;
  type: "button" | "dot" | "next" | "prev";
  selected?: boolean;
}
export default function PageNation(props: PageNationProps) {
  // total 228  page 1 size 10
  const [list, setList] = useState<Array<PageNationItem>>([]);
  // 一次最多显示8个按钮
  const maxBtnLength = 8;
  useEffect(() => {
    // TODO 分页器
    if (props.page && props.total && props.pageSize) {
      const newList: Array<PageNationItem> = [
        { index: null, label: "prev", type: "prev" },
      ];
      const { total, page, pageSize } = props;
      const totalPage = Math.ceil(total / pageSize);
      // 生成数组
      for (let i = 0; i < totalPage; i++) {
        const currentPage = i + 1;
        if (currentPage < (props.maxBtnLength || maxBtnLength)) {
          newList.push({
            type: "button",
            label: currentPage.toString(),
            index: currentPage,
            selected: page === currentPage ? true : false,
          });
        } else {
          newList.push({
            type: "dot",
            label: "...",
            index: null,
          });
          newList.push({
            type: 'button',
            label: totalPage.toString(),
            index: totalPage
          })
          break;
        }
      }
      newList.push({ index: null, label: "next", type: "next" });
      setList(newList);
    }
  }, [props]);

//   每次點擊重新生成数组

  const handleClick = (e: PageNationItem) => {
    const newList = list.map((child) => {
      child.index === e.index
        ? (child.selected = true)
        : (child.selected = false);
      return child;
    });
    setList(newList);
  };

//   处理上一页 下一页
const handleNextPrev = (e: PageNationItem) => {
    const {type} = e
    // const { total, pageSize } = props;
    // const totalPage = Math.ceil(total / pageSize);
    // 处理list选中
    const current = list.find(item => item.selected)
    if(current?.index === 1 && type === 'prev') {
        return
    }
    if(current?.index === list.filter(item => item.type === 'button').length && type === 'next') {
        return
    }
    if(current && current.index) {
        // const newList = list.map(item => {
        //     if(type === 'next'){
        //         item.index === (current.index as number + 1) ? item.selected = true : item.selected = false
        //     }else if(type === 'prev') {
        //         item.index === (current.index as number - 1) ? item.selected = true : item.selected = false
        //     }
        //     return item
        // })
        // setList(newList)
        handleNewList(type === 'next' ? current.index as number + 1 : current.index as number - 1)
    }

    if(type === 'prev') {
        props.prev ? props.prev() : ''
    }
    if(type === 'next') {
        props.next ? props.next() : ''
    }
}

// 根据页码处理新的list
const handleNewList = (page: number) => {
//   如果是第一条/最后一条，单独处理 
//  否则 page 前后各展示3条
console.log(page)
}
  return (
    <div className="page-nation flex justify-center items-center">
      {list.map((item,i) =>
        item.type === "button" ? (
          <div
          key={i}
            className={`cursor-pointer py-1px text-center min-w-20px mx-5px px-4px font-size-12px ${
              item.selected ? "bg-#5a3164" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </div>
        ) : item.type === "dot" ? (
          <div key={i}>...</div>
        ) : item.type === "prev" || item.type === "next" ? (
          <i
            key={i}
            className={`${
              item.type === "next"
                ? "i-ep-arrow-right-bold"
                : "i-ep-arrow-left-bold"
            } cursor-pointer`}
            onClick={() => handleNextPrev(item)}
          ></i>
        ) : (
          <></>
        )
      )}
    </div>
  );
}
