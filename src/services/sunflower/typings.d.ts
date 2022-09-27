declare namespace API {
  type CreateDepositDto = {
    /** 钱包详情 */
    wallets: string;
    /** 总资产 */
    total: number;
    /** 记录时间 */
    date: string;
  };

  type CreateMemberDto = {};

  type DeleteDepositDto = {
    /** 主键 */
    id: number;
  };

  type DepositControllerFindOneParams = {
    id: string;
  };

  type MemberControllerFindOneParams = {
    id: string;
  };

  type MemberControllerRemoveParams = {
    id: string;
  };

  type MemberControllerUpdateParams = {
    id: string;
  };

  type UpdateDepositDto = {
    /** 钱包详情 */
    wallets?: string;
    /** 总资产 */
    total?: number;
    /** 记录时间 */
    date?: string;
    /** 主键 */
    id: number;
  };

  type UpdateMemberDto = {};

  type User = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 用户简介 */
    intro: string;
    /** 邮箱 */
    email: string;
    /** 手机号 */
    phone: string;
  };

  type UserControllerFindOneParams = {
    id: number;
  };
}
