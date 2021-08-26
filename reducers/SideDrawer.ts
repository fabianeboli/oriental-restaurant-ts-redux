enum actTypes {
	toggleSideMenu = "TOGGLE_SIDEMENU",
	toggleSideLanguage = "TOGGLE_SIDELANGUAGE",
}

interface IState {
	sideMenu: boolean;
	sideLanguage: boolean;
}

export const toggleSideMenu = {
	type: actTypes.toggleSideMenu,
};

export const toggleSideLanguage = {
	type: actTypes.toggleSideLanguage,
};

const initialState: IState = {
	sideMenu: false,
	sideLanguage: false,
};

const reducer = (state = initialState, { type }) => {
	switch (type) {
		case actTypes.toggleSideMenu:
			console.log(state, type);
			return {
				...state,
				sideLanguage: false,
				sideMenu: !state.sideMenu,
			};
		case actTypes.toggleSideLanguage:
			console.log(state, type)
			return {
				...state,
				sideLanguage: !state.sideLanguage,
				sideMenu: false,
			};
		default:
			return state;
	}
};

export default reducer;
