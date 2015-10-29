var alt = require("../helpers/alt");
// var request = require("superagent");
// import history from "../history";

var Actions = {

	addToDo: function (data) {
		this.dispatch(data);
	},

	deleteToDo: function (index) {
		this.dispatch(index);
	}
};

module.exports = alt.createActions(Actions);
