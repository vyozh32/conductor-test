import React, { Component, Fragment } from 'react';
import RepoItem from './RepoItem';
class UserRepos extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { getReposData, reposData } = this.props;
		return (
			<Fragment>
				<div className="col-md-12 d-flex">
					<button onClick={getReposData} className="btn btn-big btn-primary">
						Get repositories
					</button>
				</div>
				<div className="repos-list col-md-12">
					<table class="table table-striped table-dark table-hover">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Description</th>
								<th scope="col">Archived</th>
								<th scope="col">Created_at</th>
								<th scope="col">Fork</th>
								<th scope="col">Forks</th>
								<th scope="col">Issues</th>
							</tr>
						</thead>
						<tbody>
							{reposData ? (
								reposData.map((item, index) => {
									return <RepoItem key={item.id} index={index} {...item} />;
								})
							) : (
								<tr>
									<th colspan="8" scope="row">
										No data
									</th>
									<td />
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</Fragment>
		);
	}
}

export default UserRepos;
