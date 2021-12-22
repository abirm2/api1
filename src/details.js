 import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

function Details({user}) {
    const [moreDetails, setmoreDetails] = useState({});
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{setmoreDetails(res.data);setloading(false)})
        .catch((err)=>console.log(err));
        
    }, [])
    let { id }=useParams()
    return (
        <div>
            { loading ? <h1 style={{textAlign:'center'}}>Wait please ...</h1>:
              <div style={{display:'flex',flexDirection:'column',marginLeft:'550px',marginTop:'50px',marginBottom:'20px',borderRadius:'5px',width:'550px',padding:'20px',backgroundColor:'black',boxShadow:'12px 12px 2px 1px rgba(16, 16, 24,0.08)'}}>

              <h2><span >Name:</span>{moreDetails.name}</h2>
              <h2><span >LastName:</span>{moreDetails.username}</h2>
              <h2><span >email:</span>{moreDetails.email}</h2>
              <h2><span >Adress:</span></h2>
              <h3><span >   * street:</span>{moreDetails.address.street}</h3>
              <h3><span >   * suite:</span>{moreDetails.address.suite}</h3>
              <h3><span >   * city:</span>{moreDetails.address.city}</h3>
              <h3><span >   * zipcode:</span>{moreDetails.address.zipcode}</h3>
              <h3><span>   * geo:</span></h3>
              <h4><span >   - lat:</span>{moreDetails.address.geo.lat}</h4>
              <h4><span >   - lng:</span>{moreDetails.address.geo.lng}</h4>
              <h2><span >phone:</span>{moreDetails.phone}</h2>
              <h2><span >website:</span>{moreDetails.website}</h2>
              <h2><span >Company:</span></h2>
              <h3><span >   * name:</span>{moreDetails.company.name}</h3>
              <h3><span >   * catchPhrase:</span>{moreDetails.company.catchPhrase}</h3>
              <h3><span >   * bs:</span>{moreDetails.company.bs}</h3>
            </div>
            
            }
            
        </div>
    )
}

export default Details;