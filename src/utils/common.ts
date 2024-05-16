/* eslint-disable @typescript-eslint/ban-types */

import moment from "moment";

export function throttle(fn: Function, delay: number = 200) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-rest-params, @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
      timer ? clearTimeout(timer) : "";
      timer = null;
    }, delay);
  };
}

export function debounce(fn: Function, delay = 100) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function () {
    // eslint-disable-next-line prefer-rest-params, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params, @typescript-eslint/no-this-alias
    const _this = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
}

// 为地址字符串添加...
export function addressDots(v: string | number, len = 12, lastlen = 12) {
  const newstr = typeof v === 'number' ? v.toString() : v
  return newstr ? newstr.slice(0, len) + "..." + newstr.slice(newstr.length - lastlen, newstr.length) : "";
}

// 时间日期时间戳转换为字符串
export function formatDate(data: number, format = "YYYY-MM-DD HH:mm:ss") {
  const t = new Date().getTime();
  const nowTime = data * 1000;
  if (nowTime) {
    if (t < nowTime) {
      return moment(nowTime * 1000).format(format);
    } else {
      const difference = t - nowTime;
      if (difference < 60) {
        return difference * 1000 + " ms ago";
      } else if (difference >= 60 && difference < 3600) {
        return Math.ceil(difference / 60) + " min ago";
      } else if (difference >= 3600 && difference < 86400) {
        return Math.ceil(difference / 3600) + " h ago";
      } else if (difference >= 86400 && difference < 604800) {
        return Math.ceil(difference / 86400) + " d ago";
      } else if (difference >= 604800 && difference < 2592000) {
        return Math.ceil(difference / 604800) + " w ago";
      } else if (difference >= 2592000 && difference < 31536000) {
        return Math.ceil(difference / 2592000) + " m ago";
      } else if (difference >= 31536000) {
        return Math.ceil(difference / 31536000) + " y ago";
      }
    }
  }
}


