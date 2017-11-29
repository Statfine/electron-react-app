import { get } from '../../../utils/request';

const key = 'c7b08bec8bf1bdfe6de3a826cab5f6b4';

const api = {
  fetchNetList(page, num = 10) {
    return get('http://api.tianapi.com/it/', { page, num, key })
      .then((data) => data)
      .catch(() => {
        throw new Error('获取失败');
      });
  }
}

export default api;
