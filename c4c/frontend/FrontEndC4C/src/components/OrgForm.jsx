import {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

function OrgForm() {
    const baseUrl = "http://localhost:8080/organizations";
    const [name, setPartnerName] = useState('');
    const [description, setDescription] = useState('');
    const [logoURL, setUrl] = useState('');
    const [active, setActive] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || description === '' || logoURL === '') {
            alert("Please fill out all the fields");
        }
        else {
            const formData = {
                name,
                logoURL,
                description,
                active
            };
            axios.post(baseUrl + "/add", formData)
                .catch(error => console.log(error));
            window.location.reload();
        }
    };

    return (
        <>
            <div className="organizationForm">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formPartnerName">
                                <Form.Label>Partner Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter partner name"
                                    value={name}
                                    onChange={(e) => setPartnerName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formUrl">
                                <Form.Label>URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    placeholder="Enter URL"
                                    value={logoURL}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <Form.Group controlId="formIsActive">
                                <Form.Check
                                    type="checkbox"
                                    label="Active?"
                                    onChange = {(e) => setActive(e.target.checked)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default OrgForm;
