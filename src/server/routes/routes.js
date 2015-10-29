var router = require("koa-router")();

require("./index")(router);

module.exports = router.routes();
