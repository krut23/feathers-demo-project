"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ResultService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ResultService extends knex_1.KnexService {
}
exports.ResultService = ResultService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'result'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=result.class.js.map