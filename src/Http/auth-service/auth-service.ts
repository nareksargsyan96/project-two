import { AxiosResponse } from 'axios';
import { $host } from '../index';

export default class AuthService {
  static login(username: string, password: string): Promise<AxiosResponse<any>> {
    return $host.post('/user', {
      username,
      password,
    });
  }

  static registration(
    username: string,
    password: string,
    confrimPassword: string,
  ): Promise<AxiosResponse<any>> {
    return $host.post('/registration', {
      username,
      password,
      confrimPassword,
    });
  }

  static logout(): Promise<any> {
    return $host.post('/logout');
  }
}
