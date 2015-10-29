var indexTemplate = require("../views/index.ejs");

module.exports = function(router) {
	router.get("*", function* () {
		this.body = indexTemplate({});
	});
};
