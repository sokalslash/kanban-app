interface IUser {
  id: string
  username: string
  email: string
}
export interface ILoginRequest {
  email: string
  password: string
  username: string
}

export interface UserApiResponse {
  user: IUser
  access_token: string
}

export interface FormValues {
  username: string
  password: string
  email: string
}
