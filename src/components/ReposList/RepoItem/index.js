import React, { Component, Fragment } from 'react';

class RepoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	handleItem = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const { description, archived, created_at, fork, forks, name, open_issues, index } = this.props;
		return (
			<Fragment>
				<tr className="table-row" onClick={this.handleItem}>
					<td colspan="8" scope="col">
						{name}
					</td>
				</tr>
				{this.state.isActive ? (
					<tr>
						<td scope="col">{index + 1}</td>
						<td scope="col">{name}</td>
						<td scope="col">{description || '-'}</td>
						<td scope="col">{archived || '-'}</td>
						<td scope="col">{created_at}</td>
						<td scope="col">{fork}</td>
						<td scope="col">{forks || '0'}</td>
						<td scope="col">{open_issues || '0'}</td>
					</tr>
				) : null}
			</Fragment>
		);
	}
}

export default RepoItem;
