import { tableList, FilterFormList, operate } from '@/interface';

export const defaultItemList: FilterFormList[] = [
  {
    key: 'id',
    type: 'input',
    label: 'id',
  },
  {
    key: 'year',
    type: 'input',
    label: 'year',
    placeholder: 'Input year',
  },
  {
    key: 'date',
    type: 'date',
    label: 'date',
    placeholder: 'Input date',
  },
  {
    key: 'classiLevel',
    type: 'select',
    label: 'classiLevel',
    options: [
      {
        label: '机密',
        value: '机密',
      },
      {
        label: '秘密',
        value: '秘密',
      },
      {
        label: '内部',
        value: '内部',
      },
    ],
  },
  {
    key: 'category',
    type: 'input',
    label: 'category',
    placeholder: 'Input category',
  },
  {
    key: 'inOrOut',
    type: 'input',
    label: 'inOrOut',
    placeholder: 'Input inOrOut',
  },
  {
    key: 'sendingCode',
    type: 'input',
    label: 'sendingCode',
    placeholder: 'Input sendingCode',
  },
  {
    key: 'orderedNumber',
    type: 'input',
    label: 'orderedNumber',
    placeholder: 'Input orderedNumber',
  },
  {
    key: 'title',
    type: 'input',
    label: 'title',
    placeholder: 'Input title',
  },
  {
    key: 'content',
    type: 'textarea',
    label: 'content',
    placeholder: 'Input content',
  },
  {
    key: 'toEntity',
    type: 'input',
    label: 'toEntity',
    placeholder: 'Input toEntity',
  },
  {
    key: 'copyEntity',
    type: 'input',
    label: 'copyEntity',
    placeholder: 'Input copyEntity',
  },
  {
    key: 'attachment',
    type: 'input',
    label: 'attachment',
    placeholder: 'Input attachment',
  },
  {
    key: 'keyword',
    type: 'select',
    label: 'keyword',
    placeholder: 'Input keyword',
    options: [
      {
        label: '人事',
        value: '人事',
      },
      {
        label: '党务',
        value: '党务',
      },
      {
        label: '财务',
        value: '财务',
      },
      {
        label: '后勤',
        value: '后勤',
      },
      {
        label: '对外',
        value: '对外',
      },
    ],
  },
  {
    key: 'workEntity',
    type: 'input',
    label: 'workEntity',
    placeholder: 'Input workEntity',
  },
  {
    key: 'author',
    type: 'input',
    label: 'author',
    placeholder: 'Input author',
  },
];

export const tableFieldsList: tableList[] = [
  {
    title: 'Year',
    dataIndex: 'year',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'To Entity',
    dataIndex: 'toEntity',
  },
];

export const filterFormItemList: FilterFormList[] = [
  {
    key: 'title',
    type: 'input',
    label: 'title',
    placeholder: 'Search title',
  },
  {
    key: 'content',
    type: 'input',
    label: 'content',
    placeholder: 'Search content',
  },
];

export const BackParams: any = {
  code: 'data.result.resultCode',
  codeOK: 0,
  message: 'data.result.resultMessage',
  data: 'data.entity',
  columns: 'config.params.columns',
  total: 'config.params.pageParams.total',
};

export const operateBtn: operate[] = [
  {
    key: 'edit',
    rowKey: 'id',
    color: 'blue',
    text: '编辑',
    roles: true,
  },
  {
    key: 'delete',
    rowKey: 'id',
    color: 'red',
    text: '删除',
    roles: true,
    msg: '确定删除？',
  },
  {
    key: 'export',
    rowKey: 'id',
    color: 'orange',
    text: '导出',
    roles: true,
    msg: '确定导出？',
  },
];
