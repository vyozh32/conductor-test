import React from 'react';
import RepoItem from '../index';
import renderer from 'react-test-renderer';

describe('<RootContainer>', function() {
	const props = {
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
	};

	it('renders correctly', function() {
		const component = renderer.create(<RepoItem {...props} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('renders with opened repo', function() {});
	const component = renderer.create(<RepoItem {...props} />);
	component.getInstance().handleItem();
	expect(component.getInstance().state.isActive).toEqual(true);
	expect(component.toJSON()).toMatchSnapshot();
});
