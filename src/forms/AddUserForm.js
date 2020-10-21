import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import "./AddUserForm.css";


const AddUserForm = props => {
	const initialFormState = {  id: null, username: '', dob:'', phone:'', address:'', gender:'', status:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className="form" style={{width: "550px", marginLeft:"330px",padding:"20px", marginTop:"-20px"}}
			onSubmit={event => {
				event.preventDefault()
				if (!user.username || !user.dob || !user.phone || !user.address || !user.gender || !user.status) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>User Name</label>
			<input type="text" name="username"  value={user.username}  onChange={handleInputChange} required />
			<label>Date of Birth</label>
			<input type="date" name="phone" value={user.phone} onChange={handleInputChange} required />
			<label>Mobile Number</label>
			<input type="text" name="dob" value={user.dob} onChange={handleInputChange} required />
			<label>Address</label>
			<input type="text" name="address" value={user.address} onChange={handleInputChange} required />
			<label >Gender</label>
			<select name="gender" value={user.gender} onChange={handleInputChange} required >
				<option></option>
				<option>Male</option>
				<option>Female</option>
				<option>Others</option>
			</select>
			
			<label>Active status</label>
			<select name="status" value={user.status} onChange={handleInputChange} required >
				<option></option>
				<option>Single</option>
				<option>Married</option>
			</select>
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm;
