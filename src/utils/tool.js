import store from '@/store/store'
const crypto = require('crypto')
const secret_key = 'HOlJnD56DcIOUHnvGy'
const SIGNATURE_VERSION = "2017-10-16";


// 生成验证签名
function sig(params, secret_key) {

  let _params = {},
    _params_key = [],
    query = [],
    name, value, querytext;

  for (let key in params) {
    _params_key.push(key);
    _params[key] = params[key];
  }
  _params_key.sort();

  for (var i = 0, len = _params_key.length; i < len; i++) {
    name = _params_key[i];
    value = _params[name];
    if (value instanceof Object) {
      value = JSON.stringify(value);
    }
    if (value !== undefined && value !== null) {
      query.push(name + '=' + value);
    }
  }
  querytext = query.join('&')
  const hmac = crypto.createHmac('sha256', secret_key);
  hmac.update(querytext);
  return new Buffer(hmac.digest('hex')).toString('base64')
}

export default {
  encryption(params) {
    let data = params || {};

    var timeStamp = new Date().getTime() + "";

    //传送数据
    var sendData = {
      accessToken: store.state.token,
      timestamp: timeStamp,
      signatureVersion: SIGNATURE_VERSION,
      appVersion: "appVersion",
      parameter: JSON.stringify(data),
      signature: sig(data, secret_key)
    }
    return sendData
  },
  // 文件流保存为文件
  saveAsFile(blob, filename) {
    if (window.navigator.msSaveBlob) {
      // for ie 10 and later
      try {
        var blobObject = new Blob([blob]);
        window.navigator.msSaveBlob(blobObject, filename);
      } catch (e) {
        console.log(e);
      }
    } else {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function(e) {
        // 转换完成，创建一个a标签用于下载
        var a = document.createElement('a');
        a.download = filename;
        a.href = e.target.result;

        // 兼容触发click
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        a.dispatchEvent(evt);
      }
    }
  },
  // 下载图片 （直接放在a标签 肯能会打开一个新页面而不是下载）
  downloadImg(imgURL) {
    return new Promise((resolve, reject) => {
      if (this.myBrowser() === "IE" || this.myBrowser() === "Edge") {
        var img = new Image();
        img.src = imgURL;
        img.onload = function(e) {
          var canvas = document.createElement("canvas");
          canvas.setAttribute('id', 'canvasId');
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.style.display = 'none'
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width, img.height);
          document.body.appendChild(canvas)

          try {
            canvas.toBlob(function(blob) {
              try {
                window.navigator.msSaveBlob(blob);
              } catch (e) {
                return reject('浏览器不支持，请使用其他浏览器尝试')
              }
            });
          } catch (error) {
            var $a = document.createElement('a');
            $a.setAttribute("href", imgURL);
            $a.setAttribute("download", "");
            // 兼容触发click
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            $a.dispatchEvent(evt);
          }
        }
      } else {
        var $a = document.createElement('a');
        $a.setAttribute("href", imgURL);
        $a.setAttribute("download", "");
        // 兼容触发click
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        $a.dispatchEvent(evt);
      }
      resolve();
    })
  },
  // 判断当前浏览器
  myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
      return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
      return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
      return "IE";
    }; //判断是否IE浏览器
    if (userAgent.indexOf("Trident") > -1) {
      return "Edge";
    } //判断是否Edge浏览器
  },
  // 判断手机端
  isMobile() {
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      isAndroid = ua.match(/(Android)\s+([\d.]+)/),
      isMobile = isIphone || isAndroid;
    if (isMobile) {
      return true;
    } else {
      return false;
    }
  },
  // 对Date的扩展，将 Date 转化为指定格式的String   
  // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
  // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
  // 例子：   
  // format(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
  // format(new Date(),"yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
  formatDate(value, fmt) {
    if (value) {
      var myDate = new Date(value);
      var o = {
        "M+": myDate.getMonth() + 1, //月份
        "d+": myDate.getDate(), //日
        "h+": myDate.getHours(), //小时
        "m+": myDate.getMinutes(), //分
        "s+": myDate.getSeconds(), //秒
        "q+": Math.floor((myDate.getMonth() + 3) / 3), //季度
        S: myDate.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (myDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1 ?
            o[k] :
            ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    } else {
      return "-";
    }
  }

}
