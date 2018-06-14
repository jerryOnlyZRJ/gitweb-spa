import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa'
import fs from 'fs'
import path from 'path'

const indexPath = path.join(__dirname, '../assets/index.html')

@route('/')
@route('/index.html')
export default class IndexRouter {
    constructor() {

    }

    @GET()
    async getIndex(ctx, next) {
        ctx.body = fs.readFileSync(indexPath, 'utf-8');
    }

}