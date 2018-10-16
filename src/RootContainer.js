import { Form, Alert, Row, Col, Grid, Glyphicon, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import ReposList from './components/ReposList';
import { selectors as userSelectors, actions as userActions } from './store/ducks/user';
import { selectors as reposSelectors, actions as reposActions } from './store/ducks/repos';

import logo from './logo.svg';
import './Root.css';

class RootContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { userData, userError, getUserData, reposData, getReposData } = this.props;
		return (
			<div className="app">
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<p>
						<code>Welcome to Github App</code>
					</p>
				</header>
				<div className="container container--form-wrapper">
					<div className="row">
						<div className="col-md-6 d-flex">
							<h3 className="text-left font-weight-bold">Insert user nickname</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 mx-auto">
							<UserForm userError={userError} onChange={getUserData} />
						</div>
					</div>
					{userData ? <UserProfile {...userData} /> : null}
					<div className="row">
						{userData ? <ReposList reposData={reposData} getReposData={getReposData} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		userData: userSelectors.getUserData(state),
		userError: userSelectors.getUserError(state),
		reposData: reposSelectors.getReposData(state),
		reposError: reposSelectors.getReposError(state)
	}),
	(dispatch) => bindActionCreators({ ...userActions, ...reposActions }, dispatch)
)(RootContainer);
