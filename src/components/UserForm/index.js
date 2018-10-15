import React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ onChange, userError }) => {
	let refInput = null;
	return (
		<div className="form">
			<div className="input-group mb-6">
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						@
					</span>
				</div>
				<input
					type="text"
					ref={(input) => (refInput = input)}
					defaultValue={'vyozh32'}
					className="form-control"
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>

				<button type="submit" className="btn btn-primary" onClick={() => onChange(refInput.value)}>
					Submit
				</button>
			</div>
			<div className="error-block">
				{userError && <span className="text-danger">{userError.response.statusText}</span>}
			</div>
		</div>
	);
};

export default UserForm;
