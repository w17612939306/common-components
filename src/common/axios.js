import axios from 'axios'
import { baseUrl } from '@common/url_config'

axios.defaults.timeout = 25000
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true

// http请求拦截器
// const CancelToken = axios.CancelToken;
const pending = [];
let loading;
axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] ="application/json";

    if (config.method == "get") {
      config.params = {
        _: Date.now(),
        ...config.params
      };
    }

    // if (localStorage.getItem("currentMenuCode")) {
    //   config.headers["systemCode"] = localStorage.getItem("currentMenuCode");
    // }
    //
    // config.headers["loginSystemCode"] = 'loginOperator';
    // config.headers["pageUrl"] = encodeURIComponent(window.location.href);
    //
    // if(config.data && Object.prototype.toString.call(config.data) !== '[object FormData]') {
    //   config.data = utils.deepCloneAndTrim(config.data);
    // }

    // config.cancelToken = new CancelToken(function executor(c) {
    //   pending.push(c);
    // });
    // loading = Loading.service({
    //     fullscreen: true
    // });
    return config;
  },
  error => {
    // loading.close();
    if (config.headers.showLoading !== false) {
      LoadingUtils.hideLoading();
    }
    message.error({
      message: "系统错误"
    });

    return Promise.reject(error);
  }
);
// http响应拦截器

export function get (url, headers = {}, params = {}, options = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: 'http://127.0.0.1:3000/',
      method: 'Get',
      headers,
      params,
      options
    }).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function post(url, data = {}, headers = {}, option = {}) {
  if (headers.notRepeatService) {
    //新增或修改的post请求,首先get获取
    LoadingUtils.showLoading();
    return new Promise((resolve, reject) => {
      axios({
        url: headers.notRepeatService +
          "/notRepeat/getNotRepeatToken?key=" +
          Date.now(),
        method: "get"
      }).then(
        response1 => {
          if (response1.data.result) {
            axios({
              url: url,
              method: "POST",
              headers: Object.assign(headers, {
                notRepeat: response1.data.obj
              }),
              data,
              ...option
            }).then(
              response => {
                LoadingUtils.hideLoading();
                if (!response.data.result) {
                  showErrorMessage(response);
                }
                resolve(response.data);
              },
              err => {
                LoadingUtils.hideLoading();
                if (err.response && err.response.status !== '401' && err.response.status !== 409) {
                  showErrorMessage();
                }
                reject(err);
              }
            );
          }
        },
        err => {
          LoadingUtils.hideLoading();
          if (err.response && err.response.status !== '401') {
            showErrorMessage();
          }
          reject(err);
        }
      );
    });
  } else {
    //普通的post请求
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: "POST",
        headers,
        data,
        ...option
      }).then(
        response => {
          if (!response.data.result) {
            showErrorMessage(response);
          }
          if (response.config.responseType === 'blob') {
            //从请求头里获取文件的类型
            const disposition=response.headers['content-disposition']
            const reg=/filename=.*(\.[^\.]+)$/
            let fileType = disposition.match(reg)

            if (fileType && fileType[1] && typeof response.data === 'object') {
              response.data.fileType=fileType[1]
            }
          }
          resolve(response.data);
        },
        err => {
          if (err.response && err.response.status !== '401') {
            showErrorMessage();
          }
          reject(err);
        }
      );
    });
  }
}

export default axios
