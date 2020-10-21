import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';
import {AppBar,Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

const App = () => {
	// Data
	const usersData = [
		// { id: 1, name: '', username: '' },
		// { id: 2, name: 'Craig', username: 'siliconeidolon' },
		// { id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initialFormState = { id: null, username: '', dob:'', phone:'', address:'', gender:'', status:'' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, username: user.username, dob: user.dob, phone: user.phone, address: user.address, gender: user.gender, status: user.status })
	}

	return (
		
		<div className="">
			<AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge="start" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow : 1}}>
                        CRUD
                    </Typography>
                   
                </Toolbar>
            </AppBar>
			<div className="container">
				<div className="flex">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2 className="" style={{marginLeft:"530px"}}>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div> <br />
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

			</div>
		</div>
	)
}

export default App
