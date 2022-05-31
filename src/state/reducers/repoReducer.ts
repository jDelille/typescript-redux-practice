import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

interface RepoState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState = { loading: false, error: null, data: [] };

const reducer = (
	state: RepoState = initialState,
	action: Action
): RepoState => {
	switch (action.type) {
		// as soon as user clicks on search
		case ActionType.SEARCH_REPOS:
			return { loading: true, error: null, data: [] };
		// if search was successful
		case ActionType.SEARCH_REPOS_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		// if search was an error
		case ActionType.SEARCH_REPOS_ERROR:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
