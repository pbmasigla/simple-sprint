import { Router, IndexRoute, Route } from "react-router";
import history from "../history";
import {
	SplashPage,
	Body
} from "./containers";

const router = (
	<Router history={ history }>
		<Route path="/">
			<IndexRoute component={ SplashPage } />
			<Route component={ Body }>
			</Route>
		</Route>
	</Router>
);

export default router;
