import axios from 'react-native-axios';

//path = url
//type = get/post
//data = if post != null
//succussM = if we want to display success message after request

function ApiService(path, type, data = null, baseUrl = 'https://www.themealdb.com/api/json/v1/1') {
  let url = baseUrl + path;
  if (type == 'get') {
    return axios
      .get(url, data)
      .then(async (res) => {
        return res.data;
      })
      .catch((error) => {

      });
  }

  if (type == 'post') {
    return axios
      .post(url, data)
      .then(async (res) => {
        return res.data;
      })
      .catch((error) => {

      });
  }

}

export default ApiService;
