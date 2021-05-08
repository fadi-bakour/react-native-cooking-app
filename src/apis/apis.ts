import { Login } from '../actions/AuthActions';
import ApiService from '../services/ApiService';
import ToastService from '../services/ToastService';

class Apis {

  loginAuth = (data) => {
    return (dispatch) => {
      if (data.email == '' || data.password == '') {
        ToastService('error', 'Please fill all inputs');
      } else {
        ToastService('success', 'Signed in successfully', true);
        dispatch(Login());
      }

      
      // ApiService(
      //   '/login',
      //   'post',
      //   data,
      // ).then((res) => {
      //   if (res) {
      //     dispatch(Login(res.token));
      //   }
      // });
    };
  };

}

const apis = new Apis(); // TODO: create instance in another place

export default apis;
