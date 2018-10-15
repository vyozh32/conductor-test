import React from 'react';

const index = ({ avatar_url, location, followers, following, name, public_repos, login }) => {
	return (
		<div className="user-container">
			<div className="row">
				<div className="col-md-4">
					<div className="user-profile d-flex">
						<div className="avatar flex-column">
							<img src={avatar_url} className="rounded" />
							<h3 className="font-weight-bold">{name}</h3>
							{location ? <h4 className="p-2">{location}</h4> : null}
							<p className="text-secondary">{login}</p>
						</div>
					</div>
				</div>
				<div className="col-md-8 flex-column">
					<div className="row">
						<div className="col-md-4 p-2">
							<span className="text-info font-weight-bold">{`Followers ${followers}`}</span>
						</div>
						<div className="col-md-4 p-2">
							<span className="text-info font-weight-bold">{`Following ${following}`}</span>
						</div>
						<div className="col-md-4 p-2">
							<span className="text-info font-weight-bold">{`Repositories ${public_repos}`}</span>
						</div>
					</div>
					<div className="row" />
				</div>
			</div>
		</div>
	);
};

export default index;
