const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./controllers/index');

const app = new Koa();

app.use(bodyParser());

app.use(async function(ctx, next) {
	ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin);
	ctx.set("Access-Control-Allow-Credentials", true);
	ctx.set("Access-Control-Max-Age", 86400000);
	ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
	ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
	await next()
});

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);
