import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Signup() {

    const [Credentials, setCredentials] = useState({ name: "", password: "", email: "", location: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Credentials);
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Credentials.name,
                email: Credentials.email,
                password: Credentials.password,
                location: Credentials.location
            })
        });
        const jsonresp = await response.json();
        console.log(jsonresp);

        if (!jsonresp.success) {
            alert("Enter valid credentials");
        }


    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='container m-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlfor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={Credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={Credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={Credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={Credentials.location} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-success m-3">Submit</button>
                <Link to="/login" className="m-3 btn btn-danger">Already a user?</Link>
            </form>
        </div>
    )
}
