export type TableListItem = {
  id: number;
  date: string;
  total: number;
  params: string;
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};

export interface TableFormDateType {
  key: string;
  name: string;
  amount: number;
  isNew?: boolean;
  editable?: boolean;
}

export type FormValueType = {
  date: string;
  total: number;
  wallets: TableFormDateType[];
};
