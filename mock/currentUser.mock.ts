// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '赖涛',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      userid: 'e0EE6cdc-3BdA-6B3f-Dc66-f9A7c2A1955F',
      email: 'd.rqgcouw@qhmzfem.ai',
      signature: '局时列级东那权本线民能许生结省。',
      title: '县众育周共土值保研日气何加斯。',
      group: '前端 6 组',
      tags: [
        { key: 1, label: '大长腿' },
        { key: 2, label: '名望程序员' },
        { key: 3, label: 'IT 互联网' },
        { key: 4, label: '傻白甜' },
        { key: 5, label: '很有想法的' },
        { key: 6, label: '阳光少年' },
        { key: 7, label: '小清新' },
        { key: 8, label: '阳光少年' },
        { key: 9, label: '名望程序员' },
        { key: 10, label: '健身达人' },
        { key: 11, label: '名望程序员' },
        { key: 12, label: '程序员' },
        { key: 13, label: '算法工程师' },
        { key: 14, label: '' },
      ],
      notifyCount: 86,
      unreadCount: 80,
      country: '意大利',
      access: '等安自路并报布济明育消因。',
      geographic: { province: { label: '湖南省', key: 15 }, city: { label: '新余市', key: 16 } },
      address: '甘肃省 临夏回族自治州 东乡族自治县',
      phone: '11161706145',
    });
  },
};
