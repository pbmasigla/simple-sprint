require("../../../less/to-do/to-do-item");

export default class ToDoItem extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.props.deleteToDo(this.props.index);
	}

	render () {
		return (
			<div className="to-do-item__container">
				<span className="to-do-item__text">{ this.props.item }</span>
				<span onClick={ this.handleClick }><i className="to-do-item__close fa fa-times"/></span>
			</div>
		);
	}
}

ToDoItem.contextTypes = {
	history: React.PropTypes.object.isRequired
};
