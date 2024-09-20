import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import './generator.css';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(10);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let charSet = '';
        if (includeUppercase) charSet += uppercaseChars;
        if (includeLowercase) charSet += lowercaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSpecialChars) charSet += specialChars;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            newPassword += charSet[randomIndex];
        }

        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <div className="password-generator-container">
                        <h2 className="text-center">Password Generator</h2>
                        <p className="text-center description-text">Create strong and secure passwords to keep your account safe online.</p>

                        <InputGroup className="mb-3">
                            <FormControl
                                className="password-field"
                                value={password}
                                readOnly
                                placeholder="Generated password"
                            />
                            <Button className="generate-btn" onClick={generatePassword}>🔄</Button>
                            <Button className="copy-btn" onClick={copyToClipboard}>Copy</Button>
                        </InputGroup>

                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Password Length: {length}</Form.Label>
                            <Form.Range
                                min="6"
                                max="20"
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                                className="range-slider"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Uppercase"
                                className="option-checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Lowercase"
                                className="option-checkbox"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Numbers"
                                className="option-checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Special Characters"
                                className="option-checkbox"
                                checked={includeSpecialChars}
                                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                            />
                        </Form.Group>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PasswordGenerator;
