import { Router, IndexRoute, Route } from "react-router";
import history from "../history";
import {
	SplashPage,
	ToDoContainer
} from "./containers";

const router = (
	<Router history={ history }>
		<Route path="/">
			<IndexRoute component={ SplashPage } />
			<Route path="to-do" component={ ToDoContainer } />
		</Route>
	</Router>
);

export default router;
