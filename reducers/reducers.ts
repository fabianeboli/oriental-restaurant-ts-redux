import { combineReducers } from "redux";
import language from "./language.ts";
import menu from "./menu.ts";
import sideDrawer from "./sideDrawer.ts";

export interface IReducers {
	language: any;
	sideDrawer: any;
	menu: any;
}

const reducers = combineReducers({
	language,
	sideDrawer,
	menu,
});

export default reducers;
