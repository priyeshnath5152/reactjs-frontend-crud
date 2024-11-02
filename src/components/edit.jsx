import { useState, Component, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function Edit(props) {
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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
        navigate('/');
       })
    }
    return (
    <>
    <h2>Edit User</h2>
    <div className="row">
        <div className="col-sm-6">
            <div className="card p-4">
           
                <label>Name</label>
                <input type="text" className="form-control mb-2" name="name" value={inputs.name || ''} onChange={handleChange} placeholder="Name" />
            
                <label>Email address</label>
                <input type="email" className="form-control mb-2" name="email" value={inputs.email || ''} onChange={handleChange} placeholder="Email" />
            
                <label>Contact</label>
                <input type="number" className="form-control mb-2" name="contact" value={inputs.contact || ''} onChange={handleChange} placeholder="Contact" />
            
                <button type="submit" onClick={submitForm} class="btn btn-primary">Submit</button>
           
            </div>
        </div>
    </div>
    </>

    )
}