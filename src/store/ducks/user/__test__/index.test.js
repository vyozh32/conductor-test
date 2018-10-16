import reducer, { actions, GET_USER_SUCCESS, GET_USER_ERROR } from '../index';
import axios from 'axios';

describe('User duck', function() {
	beforeEach(function() {});

	it('#getUserData action works correctly', function() {
		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({ data: {} });
		});
		const dispatcher = jest.fn();
		const promise = actions.getUserData('vyozh32')(dispatcher);

		return promise.then(function() {
			expect(dispatcher.mock.calls[0][0].type).toEqual(GET_USER_SUCCESS);
			expect(dispatcher.mock.calls[1][0].type).toEqual('conductor/test/get-repos-data');
		});
	});

	it('#getUserData action with error', function() {
		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.reject({});
		});
		const dispatcher = jest.fn();
		const promise = actions.getUserData('vyozh32')(dispatcher);

		return promise.then(function() {
			expect(dispatcher.mock.calls[0][0].type).toEqual(GET_USER_ERROR);
		});
	});

	it('reducer', () => {
		const defaultUserState = {
			data: null,
			error: null
		};
		const payload = {
			login: 'vyozh32',
			id: 19252581,
			name: 'Volodymyr Yozh',
			hireable: null,
			public_gists: 0
		};
		const error = {
			statusCode: '404',
			statusText: 'Not Found'
		};
		expect(reducer({}, { type: GET_USER_SUCCESS, payload })).toEqual({ data: payload, error: null });
		expect(reducer({}, { type: GET_USER_ERROR, payload: error })).toEqual({ data: null, error: error });
		expect(reducer(defaultUserState, { type: 'default', payload: error })).toEqual(defaultUserState);
	});
});
