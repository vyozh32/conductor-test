import React from 'react';
import RootContainer from '../RootContainer';
import store from '../store';
import renderer from 'react-test-renderer';
import { GET_USER_SUCCESS } from '../store/ducks/user/index';
import { GET_REPOS_SUCCESS, actions as reposActions } from '../store/ducks/repos';

describe('<RootContainer>', function() {
	it('initialy renders', () => {
		const component = renderer.create(<RootContainer store={store} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('renders with user data', () => {
		const component = renderer.create(<RootContainer store={store} />);
		store.dispatch({
			type: GET_USER_SUCCESS,
			payload: {
				avatar_url: 'https://some-avatar-url.com',
				location: 'test location',
				followers: 12,
				following: 43,
				name: 'Test name',
				public_repos: 5,
				login: 'user_test'
			}
		});
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('renders with repos data', () => {
		const component = renderer.create(<RootContainer store={store} />);
		store.dispatch({
			type: GET_REPOS_SUCCESS,
			payload: [
				{
					id: 1,
					name: 'Repos name',
					description: 'repos desc some test text',
					archived: 10,
					created_at: '322 228 1488 1337',
					fork: 10,
					forks: 100,
					name: 'Repos name',
					open_issues: 228,
					index: 10
				},
				{
					id: 2,
					name: 'Repos name',
					description: 'desc some test text',
					archived: 20,
					created_at: '322 228 1488 1337',
					fork: 6,
					forks: 23,
					name: 'Repos name',
					open_issues: 228,
					index: 32
				}
			]
		});
		expect(component.toJSON()).toMatchSnapshot();
	});
});
