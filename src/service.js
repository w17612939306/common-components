import { baseUrl, basePath } from '@common/url_config'
import { get } from '@common/axios'

export const commonApi = {
  getData: (params, header, option) => get(`${baseUrl}/getData?name=${params.name}&pwd=${params.pwd}`,)
};
