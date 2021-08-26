export enum Language {
	polish = "pl",
	english = "en",
}

export enum actTypes {
	toPolish = "TO_POLISH",
	toEnglish = "TO_ENGLISH",
}

export const toPolish = {
	type: actTypes.toPolish,
};

export const toEnglish = {
	type: actTypes.toEnglish,
};

interface ILanguage {
	language: string;
}

const initialState: ILanguage = {
	language: Language.english,
};

const reducer = (state = initialState, { type }) => {
	switch (type) {
		case actTypes.toPolish:
			return {
				...state,
				language: Language.polish,
			};
		case actTypes.toEnglish:
			return {
				...state,
				language: Language.english,
			};
		default:
			return state;
	}
};

export default reducer;
