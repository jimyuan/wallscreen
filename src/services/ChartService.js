import ajax from './xhr/'
import api from './xhr/api'

/**
 * 对应后端涉及到用户认证的 API
 */
class ChartService {
  /**
   * 获取 91steel 固定图表数据
   *
   * @return {Promise}
   */
  fetchSteel () {
    return ajax({ url: api['91steel'].other })
  }

  /**
   * 获取 91steel 实时图表数据
   *
   * @return {Promise}
   */
  liveSteel () {
    return ajax({ url: api['91steel'].today })
  }

  fetchEbaoli () {
    return ajax({ url: api.ebaoli.other })
  }

  scrollProgress () {
    return ajax({ url: api.ebaoli.progress })
  }

  liveEbaoli () {
    return ajax({ url: api.ebaoli.today })
  }
}

/**
 * 实例化后再导出 userService
 */
export default new ChartService()
