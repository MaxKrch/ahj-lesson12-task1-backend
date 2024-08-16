const Router = require('koa-router');
const createNewsFeed = require('../api/createNewsFeed');

const news = new Router();

news.get('/news', async ctx => {
	const response = await createNewsFeed();
	ctx.response.body = response;
})

module.exports = news;