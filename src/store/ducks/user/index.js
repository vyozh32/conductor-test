import axios from 'axios';
import endpoints from '../../../endpoints';
import { GET_REPOS_SUCCESS } from '../repos';

// Actions
const GET_USER_SUCCESS = 'conductor/test/get-user-data';
const GET_USER_ERROR = 'conductor/test/get-user-data-error';

// defaultState

const defaultUserState = {
	data: null,
	error: null
};

// Reducer
export default function(state = defaultUserState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_USER_SUCCESS: {
			return {
				...state,
				data: payload,
				error: null
			};
		}
		case GET_USER_ERROR: {
			return {
				...state,
				error: payload
			};
		}
		default: {
			return state;
		}
	}
}

// Action Creators

const loadUserData = (type, payload) => {
	return {
		type: type,
		payload
	};
};

// side effects, only as applicable
// e.g. thunks, epics, etc

export const actions = {
	getUserData: (user) => {
		return (dispatch, getState) => {
			const url = endpoints.USER.replace('{user_id}', user);
			axios
				.get(url)
				.then((res) => {
					return {
						data: res.data
					};
				})
				.then((response) => {
					return dispatch(loadUserData(GET_USER_SUCCESS, response.data));
				})
				.then((action) => dispatch({ type: GET_REPOS_SUCCESS, payload: null }))
				.catch((error) => {
					dispatch({ type: GET_USER_SUCCESS, payload: null });
					dispatch(loadUserData(GET_USER_ERROR, error));
				});
		};
	}
};

export const selectors = {
	getUserData: (state) => state.user.data,
	getUserError: (state) => state.user.error
};
