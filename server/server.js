// ANVÄNDS INTE JUST NU
// HAR BARA SPARAT OLIKA SNIPPETS MED KOD FÖR ATT FÖRSÖKA LÖSA CORS PROBLEMET

/*
let express = require('express'),
cors = require('cors'),
os = require('os'),
app = express(),
 
// hard coded configuration object
conf = {
    // look for PORT environment variable,
    // else look for CLI argument,
    // else use hard coded value for port 8080
    port: process.env.PORT || process.argv[2] || 3000,
 
    // origin undefined handler
    // see https://github.com/expressjs/cors/issues/71
    originUndefined: function (req, res, next) {
        if (!req.headers.origin) {
            res.json({
                mess: 'Hi you are visiting the service locally. If this was a CORS the origin header should not be undefined'
            });
 
        } else {
 
            next();
 
        }
 
    },
 
    // Cross Origin Resource Sharing Options
    cors: {
 
        // origin handler
        origin: function (origin, cb) {
 
            // setup a white list
            let wl = ['https://popify-dh2642.web.app/'];
 
            if (wl.indexOf(origin) !== -1) {
 
                cb(null, true);
 
            } else {
 
                cb(new Error('invalid origin: ' + origin), false);
 
            }
 
        },
 
        optionsSuccessStatus: 200
 
    }
 
}
 
// use origin undefined handler, then cors for all paths
app.use(conf.originUndefined, cors(conf.cors));
 
// get at root

app.get('/', function (req, res, next) {
 
    res.json({
        mess: 'hello it looks like you are on the whitelist',
        origin: req.headers.origin,
        os_hostname: os.hostname(),
        os_cpus: os.cpus()
    });
 
});
 

app.get('/', [conf.originUndefined, cors(conf.cors)],function (req, res, next) {
 
    res.json({
        mess: 'hello it looks like you are on the whitelist',
        origin: req.headers.origin,
        os_hostname: os.hostname(),
        os_cpus: os.cpus()
    });
 
});

app.listen(conf.port, function () {
 
    console.log('CORS-enabled JSON service is live on port: ' + conf.port);
 
});

*/
/*
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

app.listen(port, () => {
    console.log('Server is up!');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('build', 'index.html'));
    });
  }
*/

/*

let express = require('express'),
cors = require('cors'),
os = require('os'),
app = express(),
 
// hard coded configuration object
conf = {
    // look for PORT environment variable,
    // else look for CLI argument,
    // else use hard coded value for port 8080
    port: process.env.PORT || process.argv[2] || 3000,
 
    // origin undefined handler
    // see https://github.com/expressjs/cors/issues/71
    originUndefined: function (req, res, next) {
        if (!req.headers.origin) {
            res.json({
                mess: 'Hi you are visiting the service locally. If this was a CORS the origin header should not be undefined'
            });
 
        } else {
 
            next();
 
        }
 
    },
 
    // Cross Origin Resource Sharing Options
    cors: {
 
        // origin handler
        origin: function (origin, cb) {
 
            // setup a white list
            let wl = ['https://popify-dh2642.web.app/'];
 
            if (wl.indexOf(origin) !== -1) {
 
                cb(null, true);
 
            } else {
 
                cb(new Error('invalid origin: ' + origin), false);
 
            }
 
        },
 
        optionsSuccessStatus: 200
 
    }
 
};
 
// use origin undefined handler, then cors for all paths
app.use(conf.originUndefined, cors(conf.cors));
 
// get at root
app.get('/', function (req, res, next) {
 
    res.json({
        mess: 'hello it looks like you are on the whitelist',
        origin: req.headers.origin,
        os_hostname: os.hostname(),
        os_cpus: os.cpus()
    });
 
});
 
app.listen(conf.port, function () {
 
    console.log('CORS-enabled JSON service is live on port: ' + conf.port);
 
});





*/





/*

app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
   });

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
console.log('Server is up!');
});*/