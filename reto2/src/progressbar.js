import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import "./progressbar.css";
import { Container } from 'react-bootstrap';


function WithLabelExample() {
    const [now, setNow] = useState(0);

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (!isNaN(value) && value >= 0 && value <= 100) {
            setNow(Number(value));
        }
    };
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Progress Bar</Card.Title>
                <Card.Text>
                    <ProgressBar className="custom-progress-bar" animated now={now} label={`${now}%`} />
                    <Container>
                        <div className='form-group'>
                            <Form.Text className='text' muted>Input Porcentage:</Form.Text>
                            <Form.Control
                                type="text" // Use "number" to restrict input
                                value={now} // Bind the input value to the state
                                onChange={handleInputChange} // Update state on change
                                aria-describedby="progressHelpBlock"
                                className='progress-bar-input'
                            />
                        </div>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WithLabelExample;

