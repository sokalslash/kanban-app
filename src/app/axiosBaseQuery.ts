import axios from 'axios'

import { BASE_URL } from './constants'

export const axiosBaseQuery =
  ({ endPointSuffix } = { endPointSuffix: '' }) =>
  async (args: any, api: any) => {
    // const { getState } = api;
    // const { token } = getState().authentication;

    try {
      const result = await axios({
        baseURL: BASE_URL + endPointSuffix,
        headers: {
          ...args.headers,
          authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
        ...args, // url, method, params, etc...
      })
      return result
    } catch (err) {
      if ((err as { response?: { status?: number } })?.response?.status === 401) {
        window.location.href = 'http://' + window.location.href.split('/')[2] + '/login'
      }
      return {
        error: {
          // @ts-ignore
          status: err.response?.status,
          // @ts-ignore
          data: err.response?.data || err.message,
        },
      }
    }
  }
