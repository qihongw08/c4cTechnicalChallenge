import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OrgForm from './components/OrgForm';
import './assets/App.css';
import { Badge, Modal, Form } from 'react-bootstrap';
import SearchBar from './components/SearchBar';

function App() {
    const baseUrl = "http://localhost:8080/organizations";
    const [organizations, setOrganizations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingOrg, setEditingOrg] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const [showActive, setShowActive] = useState(false);

    useEffect(() => {
        axios.get(baseUrl + "/find/all")
            .then((response) => {
                setOrganizations(response.data);
            });
    }, []);

    function handleClick() {
        setShowForm(!showForm);
    }

    const handleDelete = (organization) => {
        axios.delete(baseUrl + "/remove", { data: organization })
            .catch(error => console.log(error));
        window.location.reload();
    }

    const handleEdit = (organization) => {
        setEditingOrg(organization);
    }

    const handleSave = () => {
        axios.put(baseUrl + "/update/" + editingOrg.id.toString(), editingOrg)
            .then(() => {
                setEditingOrg(null);
                window.location.reload();
            })
            .catch(error => console.log(error));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditingOrg((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFilterToggle = () => {
        setShowActive((prev) => !prev);
    };

    const filteredOrganizations = searchResult.filter((organization) => {
        return showActive ? organization.active : true;
    });

    return (
        <>
            <div className="title">
                C4C: Projects
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <SearchBar setSearchResult={setSearchResult}/>
                <Button className="filter-button" variant={showActive ? "success" : "secondary"} onClick={handleFilterToggle}>
                    {showActive ? "Show All" : "Show Active Only"}
                </Button>
            </div>
            <Button className="add-button" onClick={handleClick}>Add Organization</Button>
            {showForm && (
                <OrgForm />
            )}
            <br />
            <div className="container">
                <div className="item">
                    {filteredOrganizations.map((organization) => (
                        <Card className="item mx-auto" style={{ width: "fit-content" }} key={organization.id}>
                            <Card.Img className="mx-auto" variant="top" src={organization.logoURL} />
                            <Card.Body>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="ms-0">{organization.name}</Card.Title>
                                    {organization.active ? (
                                        <Badge className="ms-2 active-status" bg="success">Active</Badge>
                                    ) : (
                                        <Badge className="ms-2 active-status" bg="secondary">Inactive</Badge>
                                    )}
                                </div>
                                <Card.Text>
                                    {organization.description}
                                </Card.Text>
                                <Button className="edit-button" variant="dark" onClick={() => handleEdit(organization)}>Edit</Button>
                                <Button className="delete-button" variant="danger" onClick={() => handleDelete(organization)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

            {editingOrg && (
                <Modal show={true} onHide={() => setEditingOrg(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Organization</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formPartnerName">
                                <Form.Label>Partner Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter partner name"
                                    name="name"
                                    value={editingOrg.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDescription" className="mt-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter description"
                                    name="description"
                                    value={editingOrg.description}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formUrl" className="mt-3">
                                <Form.Label>URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    placeholder="Enter URL"
                                    name="logoURL"
                                    value={editingOrg.logoURL}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formIsActive" className="mt-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Active?"
                                    name="active"
                                    checked={editingOrg.active}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setEditingOrg(null)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default App;
