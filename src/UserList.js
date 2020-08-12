import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Userlist({users}) {
    return (

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {users?users.map((el,i)=>(<tr><td>{i}</td>
      <td><Link to={{pathname: `/${el.id}`}} key={i}>{el.name}</Link></td></tr>)):null}
  </tbody>
</Table>
    )
}
