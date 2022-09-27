// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/notices': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          id: 'cc1e1Dcf-929D-edCf-DF2D-A4Ae48DdeBB2',
          extra: '8mmX',
          key: 18,
          read: true,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '被目公率出条七见图科百响听。',
          status: 'default',
          datetime: '1996-01-01',
          description: '农布级六写器关儿形给京易满带劳。',
          type: 'notification',
        },
      ],
      total: 91,
      success: false,
    });
  },
};
