// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/sunflower/deposit */
export async function DepositControllerFindAll(options?: { [key: string]: any }) {
  return request<any>('/api/sunflower/deposit', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/sunflower/deposit/${param0} */
export async function DepositControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepositControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/sunflower/deposit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/sunflower/deposit/asc */
export async function DepositControllerFindAllAsc(options?: { [key: string]: any }) {
  return request<any>('/api/sunflower/deposit/asc', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/sunflower/deposit/create */
export async function DepositControllerCreate(
  body: API.CreateDepositDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/sunflower/deposit/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/sunflower/deposit/delete */
export async function DepositControllerRemove(
  body: API.DeleteDepositDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/sunflower/deposit/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/sunflower/deposit/update */
export async function DepositControllerUpdate(
  body: API.UpdateDepositDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/sunflower/deposit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
