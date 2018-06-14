import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa'
import {
    createBundleRenderer
} from 'vue-server-renderer';
import fs from 'fs'
import path from 'path'
import LRU from 'lru-cache'

@route('/')
@route('/index.html')
export default class IndexRouter {
    constructor() {

    }

    @GET()
    async getIndex(ctx, next) {
        ctx.body = {
            data: 'success'
        };
    }

}