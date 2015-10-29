export default class ToDoInput extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleClick () {
		var newToDo = ReactDOM.findDOMNode(this.refs.todo).value;
		this.props.addToDo(newToDo);
		ReactDOM.findDOMNode(this.refs.todo).value = "";
	}

	handleKeyDown (e) {
		if (e.key === "Enter") {
			this.handleClick();
		}
	}

	render () {
		return (
			<div className="to-do-input__container">
				<input
					ref="todo"
					className="to-do-input__input"
					onKeyDown={ this.handleKeyDown } />

				<a className="to-do-input__button" onClick={ this.handleClick }>Add To Do</a>
			</div>
		);
	}
}

ToDoInput.contextTypes = {
	history: React.PropTypes.object.isRequired
};
