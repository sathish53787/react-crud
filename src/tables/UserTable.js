import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const UserTable = props => (
  <Paper>
  <Table>
    <TableHead>
      <TableRow >
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}} >User Name</TableCell>
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}}>DOB</TableCell>
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}}>Mobile</TableCell>
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}}>Address</TableCell>
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}}>Gender</TableCell>
        <TableCell style={{fontWeight:"bold", fontSize:"20px"}}>Active Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <TableRow style={{fontSize:"20px"}} key={user.id}>
            <TableCell style={{fontSize:"20px"}}>{user.username}</TableCell>
            <TableCell style={{fontSize:"20px"}}>{user.dob}</TableCell>
            <TableCell style={{fontSize:"20px"}}>{user.phone}</TableCell>
            <TableCell style={{fontSize:"20px"}}>{user.address}</TableCell>
            <TableCell style={{fontSize:"20px"}}>{user.gender}</TableCell>
            <TableCell style={{fontSize:"20px"}}>{user.status}</TableCell>
            <TableCell>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button" style={{backgroundColor:"#e7e7e7"}}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button" style={{backgroundColor:"#e7e7e7"}}
              >
                Delete
              </button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={3}>No users</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
  </Paper>
);

export default UserTable
