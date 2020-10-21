import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className="form" style={{width: "550px", marginLeft:"330px",padding:"20px", marginTop:"-22px"}}
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
     <label>User Name</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} required />
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
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;
