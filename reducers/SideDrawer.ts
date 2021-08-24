enum actTypes {
	toggleSideDrawer = "TOGGLE_SIDEDRAWER",
}

interface IState {
	isSideDrawerVisible: false;
}

export const toggleSideDrawer = {
	type: actTypes.toggleSideDrawer,
};

const initialState: IState = {
	isSideDrawerVisible: false,
};

export default (state = initialState, { type }) => {
	switch (type) {
		case actTypes.toggleSideDrawer:
			return {
				...state, 
				isSideDrawerVisible: !state.isSideDrawerVisible
			}
		default:
			return state;
	}
};
