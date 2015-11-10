require("../less/style");
require("font-awesome-webpack");
import Router from "./components/routes";

ReactDOM.render(
	Router,
	document.getElementById("app-container")
);
