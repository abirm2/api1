import React from 'react'
import User from './user';
import axios from 'axios';
import {useState,useEffect} from 'react'

function Users() {
    const [users, setusers] = useState([]);
    const [loading,setloading]=useState(true)
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setusers(res.data);setloading(false)})
        .catch(console.log('error'));
        
    }, [])

    console.log(users)
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            {    loading ? "mazelt nestana": 
            users.map(user=>
                <User user={user}/>
            )}
        </div>
    )
}

export default Users;