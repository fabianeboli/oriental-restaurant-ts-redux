enum Language {
	polish = "pl",
	english = "en",
}

export enum actTypes {
	toPolish = "TO_POLISH",
	toEnglish = "TO_ENGLISH",
}

export const toPolish = () => {
	return {
		type: actTypes.toPolish,
	};
};

export const toEnglish = () => {
	return {
		type: actTypes.toEnglish,
	};
};

interface ILanguage {
	language: string;
}

const initialState: ILanguage = {
	language: "polish",
};

export default (state = initialState, { type }) => {
	switch (type) {
		case actTypes.toPolish:
			return {
				...state, 
				language: Language.polish
			}
		case actTypes.toEnglish:
			return {
				...state,
				Language: Language.english
			}
		default:
			return state;
	}
};
