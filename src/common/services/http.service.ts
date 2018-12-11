import { IHttpService, IRequestShortcutConfig } from 'angular';

export class HttpService {

  static $inject: string[] = ['$http'];

  baseUrl = process.env.NODE_ENV === 'production' ? '' : 'api';

  constructor(private $http: IHttpService) {
  }

  get(url: string, config: IRequestShortcutConfig = {}) {
    return this.$http.get(this.baseUrl + url, config);
  }

  post(url: string, data: any, config: IRequestShortcutConfig = {}) {
    return this.$http.post(this.baseUrl + url, data, config);
  }

  delete(url: string, config: IRequestShortcutConfig = {}) {
    return this.$http.delete(this.baseUrl + url, config);
  }


  put(url: string, data: any, config: IRequestShortcutConfig = {}) {
    return this.$http.put(this.baseUrl + url, data, config);
  }


  patch(url: string, data: any, config: IRequestShortcutConfig = {}) {
    return this.$http.patch(this.baseUrl + url, data, config);
  }
}
