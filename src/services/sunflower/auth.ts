// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/sunflower/auth/login */
export async function AuthControllerLogin(options?: { [key: string]: any }) {
  return request<any>('/api/sunflower/auth/login', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注册 POST /api/sunflower/auth/register */
export async function AuthControllerRegister(body: API.User, options?: { [key: string]: any }) {
  return request<any>('/api/sunflower/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户信息 GET /api/sunflower/auth/user */
export async function AuthControllerUser(options?: { [key: string]: any }) {
  return request<any>('/api/sunflower/auth/user', {
    method: 'GET',
    ...(options || {}),
  });
}
