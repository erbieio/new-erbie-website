export interface PageParams {
    page: number
    page_size: number
}

export interface PageResponse {
    total: number
}

export type SorterResult<T> = {  
    field: keyof T;  
    order: 'ascend' | 'descend';  
    columnKey?: React.Key;
    column: TableColumnsType<unknown>
  };