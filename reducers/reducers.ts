import { combineReducers } from "redux";
import Language from "./Language.ts";
import SideDrawer from "./SideDrawer.ts";

export interface IReducers {
	language: any;
	sideDrawer: any;
}

const reducers = combineReducers({
	language: Language,
	sideDrawer: SideDrawer,
});

export default reducers;
