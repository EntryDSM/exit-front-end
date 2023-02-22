import { Cookies } from 'react-cookie';

export class Cookie {
  static readonly cookie = new Cookies();

  static getCookie(name: string) {
    return this.cookie.get(name) ?? '';
  }

  static setCookie(name: string, value: string, option?: any) {
    this.cookie.set(name, value, { ...option });
  }
}
