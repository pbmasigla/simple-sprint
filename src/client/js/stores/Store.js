var alt = require("../helpers/alt");
var Actions = require("../actions/Actions");

var Store = {

	state: {
		todoList: []
	},

	bindListeners: {
		addToDo: Actions.addToDo,
		deleteToDo: Actions.deleteToDo
	},

	addToDo: function(data) {
		var newToDo = this.state.todoList;
		newToDo.push(data);
		this.setState({ todoList: newToDo });
	},

	deleteToDo: function(index) {
		var newToDo = this.state.todoList;
		newToDo.splice(index, 1);
		this.setState({ todoList: newToDo });
	}
};

module.exports = alt.createStore(Store, "Request Store");
