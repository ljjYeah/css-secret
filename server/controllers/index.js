import Router from 'koa-router';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
import list from '../data/list.js';

const router = new Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/list', (ctx) => {
	ctx.body = {
		code: 0,
		data: {
			list: list
		}
	}
});

router.get('/info', (ctx) => {
	let id = ctx.query.id;
	const ids = Object.keys(list);
	const currentIdIndex = ids.indexOf(id);
	
	if (currentIdIndex === -1) {
		ctx.body = {
			code: 1,
			data: {},
			msg: '未查询到信息'
		}
	} else {
		ctx.body = {
			code: 0,
			data: {
				current: {
					id,
					title: list[ids[currentIdIndex]].title,
					html: fs.readFileSync(path.join(__dirname, `../data/examples/${id}.html`), 'utf-8')
				},
				pre: {
					id: currentIdIndex === 0 ? '-1' : ids[currentIdIndex-1],
					title: currentIdIndex === 0 ? '' : list[ids[currentIdIndex-1]].title
				},
				next: {
					id: currentIdIndex === (ids.length-1) ? '-1' : ids[currentIdIndex+1],
					title: currentIdIndex === (ids.length-1) ? '-1' : list[ids[currentIdIndex+1]].title
				},
			}
		}
	}
});

export default router;
