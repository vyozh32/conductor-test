import axios from 'axios';
import endpoints from '../../../endpoints';

// Actions

export const GET_REPOS_ERROR = 'conductor/test/get-repos-data';
export const GET_REPOS_SUCCESS = 'conductor/test/get-repos-data';

// defaultState

const defaultReposState = {
	data: null,
	error: null
};

// Reducer
export default function(state = defaultReposState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_REPOS_SUCCESS: {
			return {
				...state,
				data: payload,
				error: null
			};
		}
		case GET_REPOS_ERROR: {
			return {
				...state,
				loading: false,
				loaded: true,
				error: payload
			};
		}
		default: {
			return state;
		}
	}
}

// Action Creators

const loadReposData = (type, payload) => {
	return {
		type: type,
		payload
	};
};

// side effects, only as applicable
// e.g. thunks, epics, etc

export const actions = {
	getReposData: () => {
		return (dispatch, getState) => {
			const user = getState().user.data.login;
			const url = endpoints.REPOS.replace('{user_id}', user);
			axios
				.get(url)
				.then((res) => {
					return {
						data: res.data
					};
				})
				.then((response) => {
					return dispatch(loadReposData(GET_REPOS_SUCCESS, response.data));
				})
				.catch((error) => dispatch(loadReposData(GET_REPOS_ERROR, error)));
		};
	}
};

export const selectors = {
	getReposData: (state) => state.repos.data,
	getReposError: (state) => state.repos.error
};
