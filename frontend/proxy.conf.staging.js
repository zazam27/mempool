const fs = require('fs');

let PROXY_CONFIG = require('./proxy.conf');

PROXY_CONFIG.forEach(entry => {
  entry.target = entry.target.replace("mempool.space", "mempool-staging.tk7.mempool.space");
  entry.target = entry.target.replace("liquid.network", "liquid-staging.tk7.mempool.space");
  entry.target = entry.target.replace("bisq.markets", "bisq-staging.fra.mempool.space");
});

module.exports = PROXY_CONFIG;
