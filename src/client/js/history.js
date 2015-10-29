import createBrowserHistory from "history/lib/createBrowserHistory";
import useQueries from "history/lib/useQueries";

const history = useQueries(createBrowserHistory)();

// TODO: reinvestigate alternative solutions, keeping track of
// location on history is a temporary solution
let _location;
let _previousLocations = [];
history.getLocation = () => _location;
history.previousLocation = () => _previousLocations[_previousLocations.length - 2] || history.createLocation("/");

function trackPrevious(location) {
	switch (location.action) {
	case "PUSH":
		_previousLocations.push(location);
		break;
	case "POP":
		if (_previousLocations.length) {
			_previousLocations.pop();
		} else {
			// handle page refresh as a pop with no previousLocations
			_previousLocations.push(location);
		}
		break;
	case "REPLACE":
		_previousLocations[_previousLocations.length - 1] = location;
		break;
	default:
		throw new Error("Unknown location action", location);
	}
}

history.listen(location => {
	trackPrevious(location);
	_location = location;
});

export default history;
