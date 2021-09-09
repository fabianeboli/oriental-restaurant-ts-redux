import { combineReducers, createStore } from "redux";
import language from "./language.ts";
import menu from "./menu.ts";
import sideDrawer from "./sideDrawer.ts";

export interface IReducers {
	language: any;
	sideDrawer: any;
	menu: any;
}

export const reducers = combineReducers({
	language,
	sideDrawer,
	menu,
});

export const store = createStore(reducers);


