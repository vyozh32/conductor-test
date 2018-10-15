import React from 'react';
import RootContainer from '../RootContainer';

describe('<RootContainer>', function() {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<RootContainer store={store} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
