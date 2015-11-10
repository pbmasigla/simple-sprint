require("../../../less/to-do/to-do-list");
import ToDoItem from "./to-do-item";

export default class ToDoList extends React.Component {
	render () {
		var list = this.props.todoList.map(function(item, index) {
			return <ToDoItem
					key={ index }
					item={ item }
					index={ index }
					deleteToDo={ this.props.deleteToDo } />;
		}.bind(this));

		return (
			<div className="to-do-list__container">
				<div className="to-do-list__background"></div>
				<h1 className="to-do-list__header">my list</h1>
				{ list }
			</div>
		);
	}
}

ToDoList.contextTypes = {
	history: React.PropTypes.object.isRequired
};
