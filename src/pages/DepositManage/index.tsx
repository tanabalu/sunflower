import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { FormValueType } from './data';
import type { TableListItem, TableListPagination } from './data';
import {
  DepositControllerCreate,
  DepositControllerFindAll,
  DepositControllerRemove,
  DepositControllerUpdate,
} from '@/services/sunflower/deposit';
import DepositEdit from './components/DepositEdit';
import moment from 'moment';
/**
 * 添加节点
 *
 * @param fields
 */

const handleAdd = async (fields: FormValueType) => {
  const hide = message.loading('正在添加');

  try {
    await DepositControllerCreate(fields);
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在更新');

  try {
    // await updateRule({
    //   ...currentRow,
    //   ...fields,
    // });
    await DepositControllerUpdate(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error) {
    hide();
    message.error('更新失败请重试！');
    return false;
  }
};

const handleDelete = async (id: number) => {
  const hide = message.loading('正在删除');

  try {
    // await updateRule({
    //   ...currentRow,
    //   ...fields,
    // });
    await DepositControllerRemove({ id });
    hide();
    message.success('删除成功');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败请重试！');
    return false;
  }
};

const TableList: React.FC = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 分布更新窗口的弹窗 */

  // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();

  const columns: ProColumns<TableListItem>[] = [
    // {
    //   title: '规则名称',
    //   dataIndex: 'name',
    //   tip: '规则名称是唯一的 key',
    //   render: (dom, entity) => {
    //     return (
    //       <a
    //         onClick={() => {
    //           setCurrentRow(entity);
    //           setShowDetail(true);
    //         }}
    //       >
    //         {dom}
    //       </a>
    //     );
    //   },
    // },
    {
      title: '月份',
      dataIndex: 'date',
      renderText: (val) => moment(val).format('YYYY年MM月'),
      // valueType: 'dateMonth',
      // hideInSearch: true,
    },
    {
      title: '资产（元）',
      dataIndex: 'total',
      sorter: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleModalVisible(true);
            setCurrentRow(record);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="确认删除这条记录吗?"
          onConfirm={async () => {
            const success = await handleDelete(record.id);
            if (success && actionRef.current) {
              actionRef.current.reload();
            }
          }}
        >
          <a href="#">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<TableListItem, TableListPagination>
        actionRef={actionRef}
        rowKey="key"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
              setCurrentRow(void 0);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={DepositControllerFindAll}
        columns={columns}
      />
      <DepositEdit
        values={currentRow}
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          // 表单回传的total还是老数据，需要重新计算
          const total = value.wallets.reduce((prev, next) => {
            return prev + next.amount;
          }, 0);
          console.log('finish', value, total, currentRow?.id);
          const wallets = JSON.stringify(value.wallets);
          let success = false;
          if (currentRow?.id) {
            // 更新
            success = await handleUpdate(
              {
                id: currentRow?.id,
                date: new Date(value.date).toISOString(),
                total,
                wallets,
              },
              currentRow,
            );
          } else {
            // 新建
            success = await handleAdd({
              date: new Date(value.date).toISOString(),
              total,
              wallets,
            });
          }
          console.log(value);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />

      {/* <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value, currentRow);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      /> */}
    </PageContainer>
  );
};

export default TableList;
