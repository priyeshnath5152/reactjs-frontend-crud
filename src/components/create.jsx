import { useState, Component } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/user_store',inputs).then((res)=>{
        navigate('/');
       })
    }
    return (
    <>
    <h2>New User</h2>
    <div className="row">
        <div className="col-sm-6">
            <div className="card p-4">
           
                <label>Name</label>
                <input type="text" className="form-control mb-2" name="name" value={inputs.name || ''} onChange={handleChange} placeholder="Name" />
            
                <label>Email address</label>
                <input type="email" className="form-control mb-2" name="email" value={inputs.email || ''} onChange={handleChange} placeholder="Email" />
            
                <label>Contact</label>
                <input type="number" className="form-control mb-2" name="contact" value={inputs.contact || ''} onChange={handleChange} placeholder="Contact" />
            
                <label>Password</label>
                <input type="password" className="form-control mb-2" name="password" value={inputs.password || ''} onChange={handleChange} placeholder="Password"/>
        
                <button type="submit" onClick={submitForm} class="btn btn-primary">Submit</button>
           
            </div>
        </div>
    </div>
    </>

    )
}