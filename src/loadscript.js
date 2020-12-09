


export default function loadScript(url, cb) {

      var scr = document.createElement('script');
      scr.type = 'text/javascript';

      if (scr.readyState) { // IE
        scr.onreadystatechange = function() {
          if (scr.readyState ==="loaded" || scr.readyState ==='complete') {
            scr.onreadystatechange = null;
            cb();
          }
        };
      } else { // Others
        scr.onload = cb;
      }

      scr.src = url;
      document.getElementsByTagName('head')[0].appendChild(scr);
    }