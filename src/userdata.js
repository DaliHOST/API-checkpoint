import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {Card,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';



export default function Userdata({ match }) {
    const [listOfUSer, setListOfUSer] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setListOfUSer(res.data)
            })
            .catch(err => console.log(err))
    }, [setListOfUSer])
    return (
        <div>
            {listOfUSer ? listOfUSer.map((el, i) => match.params.id == el.id ?
                <div key={i}>
                    <Link to="/"><HomeIcon style={{fontSize:'50px',margin:'1% 0 2% 2%'}}/></Link>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',marginLeft:'40%'}}>
                    <Avatar style={{marginLeft:'7rem',width:'100px',height:'100px',fontSize:'50px',marginBottom:'2%'}}>{el.name[0]}</Avatar>
                    <Card style={{ width: '19rem',textAlign:'center'}}>
                        <Card.Header>{el.name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Username:</b> {el.username}</ListGroup.Item>
                            <ListGroup.Item><b>Email:</b> {el.email}</ListGroup.Item>
                            <ListGroup.Item><b>Adress:</b> {el.address.street}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                </div>
                : null) : null}
            {/* {console.log(listOfUSer)} */}
        </div>
    )
}
