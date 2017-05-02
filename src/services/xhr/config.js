// 此处配置 根访问路径 以及 全局错误处理
// 更多配置请根据业务逻辑自行实现

// 后端 API 地址，最好以 http(s):// 打头
let apiEnv, apiRoot

function errHandler (err) {
  console.warn('[ XHR:Failed ] 详情请看控制台')
  console.error(err)
}

function warnHandler (res) {
  console.warn(`[ XHR:Warning ] respCode: ${res.respCode}; message: ${res.memo}`)
}

/**
 * apiEnv: 各个不同环境所对应的 api
 *
 * @type {Object}
 */
apiEnv = {
  'local': {
    // webAPI: 'http://localhost:8084'
    webAPI: 'http://10.66.1.226/largescreen-mobile'
  },
  'dev': {
    webAPI: 'http://10.66.1.226/largescreen-mobile'
  },
  'test': {
    webAPI: 'http://httptrade.91steel.com/largescreen-mobile'
  },
  'pro': {
    webAPI: 'http://www.ebaoli.com/largescreen-mobile'
  }
}

/* === 判断当前为开发环境 === */
switch (window.location.host) {
  // local env
  case 'localhost:8080':
    apiRoot = apiEnv.local
    break
  // dev env
  case '10.66.1.226':
    apiRoot = apiEnv.dev
    break
  // test env
  case 'httptrade.91steel.com':
    apiRoot = apiEnv.test
    break
  // pro env
  case 'www.ebaoli.com':
    apiRoot = apiEnv.pro
    break
  default:
    apiRoot = apiEnv.dev
}
// baseURL = envPath

export { errHandler, warnHandler, apiEnv, apiRoot }
