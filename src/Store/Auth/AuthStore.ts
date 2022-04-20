import { makeAutoObservable } from 'mobx';
import AuthService from '../../Http/auth-service/auth-service';
// import { history } from '../../helpers/history';
// import AuthService from '../../http/auth-service';

export default class AuthStore {
  isAuth: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  async login({ username, password }: any) {
    try {
      const { data } = await AuthService.login(username, password);
      console.log(data);
    } catch (error) {
      console.log(error);

      //   if (error && axios.isAxiosError(error)) {
      //     if (error.response?.data?.errors) {
      //       this.errorMessage =
      //         error.response?.data?.errors[Object.keys(error.response?.data?.errors)[0]][0];
      //     }
      //   } else {
      //     console.log(error);
      //   }
    }
  }

  async logout() {
    // try {
    //   this.isAuth = false;
    //   this.user = null;
    //   localStorage.removeItem('isAuth');
    //   localStorage.removeItem('user');
    //   history.push('/login');
    // } catch (error) {
    //   console.log(error);
    // }
    console.log('logout');
  }

  async Registration({ email, password, confrimPassword }: any) {
    try {
      const { data } = await AuthService.registration(email, password, confrimPassword);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
