const koaCombineRouters = require('koa-combine-routers');
const news = require('./news');

const routers = koaCombineRouters(
	news
)

module.exports = routers;