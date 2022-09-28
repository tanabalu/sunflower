import React, { useRef } from 'react';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormDependency,
  ProFormDigit,
} from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { EditableProTable } from '@ant-design/pro-table';
import type { ProColumnType } from '@ant-design/pro-table';
import moment from 'moment';
import type { FormValueType, TableFormDateType, TableListItem } from '../data';

export type DepositEditProps = {
  values: TableListItem | undefined;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (value: FormValueType) => Promise<boolean | void>;
};

const DepositEdit: React.FC<DepositEditProps> = ({
  values = {},
  visible,
  onVisibleChange,
  onFinish,
}) => {
  const formRef = useRef<ProFormInstance>();

  const columns: ProColumnType<TableFormDateType>[] = [
    {
      title: '钱包',
      dataIndex: 'name',
      key: 'name',
      width: '50%',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
          {
            validator: (rule, value, callback) => {
              const currentKey = rule.field.split('.')[0];
              const wallets: TableFormDateType[] = formRef.current?.getFieldValue('wallets') || [];
              const wallet = wallets.find((item) => item.name === value && item.key !== currentKey);
              if (wallet) {
                callback('请不要重复选择同一个钱包');
              } else {
                callback();
              }
            },
          },
        ],
      },
      valueEnum: {
        0: {
          text: '支付宝',
        },
        1: {
          text: '微信',
        },
        2: {
          text: '网商银行',
        },
        3: {
          text: '招商银行卡',
        },
        4: {
          text: '招行香港一卡通',
        },
        5: {
          text: '交通银行卡',
        },
        6: {
          text: '华安赢徽',
        },
        7: {
          text: '平安银行卡',
        },
        8: {
          text: '平安信用卡',
        },
      },
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      width: '30%',
      valueType: 'money',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (_, record: TableFormDateType, index, action) => {
        return [
          <a
            key="eidit"
            onClick={() => {
              action?.startEditable(record.key);
            }}
          >
            编辑
          </a>,
        ];
      },
    },
  ];

  return (
    <ModalForm
      title="记录储蓄"
      formRef={formRef}
      visible={visible}
      initialValues={{
        date: moment(values?.date),
        total: values?.total,
        wallets: JSON.parse(values?.wallets || '[]'),
      }}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
      modalProps={{
        destroyOnClose: true,
      }}
    >
      <ProFormDatePicker label="日期" name="date" width="sm" />
      <ProFormDependency name={['wallets']}>
        {({ wallets }) => {
          const amount = wallets.reduce((prev: number, next: TableFormDateType) => {
            return prev + next.amount;
          }, 0);
          console.log('监听到更新了', wallets, amount);
          return (
            <ProFormDigit
              disabled
              fieldProps={{ value: amount }}
              width="sm"
              label="总资产"
              name="total"
            />
          );
        }}
      </ProFormDependency>
      <ProForm.Item name="wallets" label="钱包详情">
        <EditableProTable<TableFormDateType>
          recordCreatorProps={{
            record: () => {
              return {
                key: `0${Date.now()}`,
              };
            },
          }}
          columns={columns}
          rowKey="key"
        />
      </ProForm.Item>
    </ModalForm>
  );
};

export default DepositEdit;
