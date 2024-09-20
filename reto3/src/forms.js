import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'; // Archivo CSS para el estilo del margen

function BasicExample() {
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        age: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); // Solo se actualizan los datos cuando se hace submit
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>FullName:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className="submitted-info">
                <h5>Request Sent to DB with below request data</h5>
                <ul>
                    <li>UserName: {submittedData ? submittedData.username.toUpperCase() : ''}</li>
                    <li>FullName: {submittedData ? submittedData.fullname.toUpperCase() : ''}</li>
                    <li>Age: {submittedData ? submittedData.age : ''}</li>
                </ul>
            </div>
        </>
    );
}

export default BasicExample;
