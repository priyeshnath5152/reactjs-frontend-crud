import { useState, Component, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function View(props) {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser = () =>{
        http.get('/users/'+id+'/edit').then((res) => {
            setInputs({
                name:res.data.name,
                email:res.data.email,
                contact:res.data.contact,
            });
        });
    }

   
    return (
    <>
    <h2>view User</h2>
    <div className="row">
        <div className="col-sm-6">
            <div className="card p-4">
           
                <h2>Name</h2>
                <p>{inputs.name}</p>
               
                <h2>Email address</h2>
                <p>{inputs.email}</p>
              
                <h2>Contact</h2>
                <p>{inputs.contact}</p>
                
            </div>
        </div>
    </div>
    </>

    )
}