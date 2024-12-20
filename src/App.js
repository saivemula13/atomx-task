import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { CardSection } from './Components/CardSection/CardSection';
import { EditCardSection } from './Components/EditCardSection/EditCardSection';

function App() {
  const [data, setData] = useState([
    { name: "sai jagadeesh", id: Date.now(), designation: "Frontend Developer", edit: false },
  ]);
  const [newCard, setNewCard] = useState({ name: "", designation: "" });
  console.log(data);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewCard((prev) => ({ ...prev, [id]: value }));
  };

  const addCard = () => {
    if (newCard.name && newCard.designation) {
      setData((prev) => [
        ...prev,
        { ...newCard, id: Date.now(), edit: false },
      ]);
      setNewCard({ name: "", designation: "" });
    }
  };

  const toggleEdit = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, edit: !item.edit } : item
      )
    );
  };

  const updateCard = (id, updatedCard) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...updatedCard, id, edit: false } : item
      )
    );
  };

  const deleteCard = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container className='my-5'>
      <Row className='align-items-end'>
        <Col md={4}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={newCard.name}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="designation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              value={newCard.designation}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button className='mt-3' variant="primary" onClick={addCard}>Add</Button>
        </Col>
      </Row>
      <Row className='mt-5'>
        {data.map((item) => (
          <Col md={6} lg={4} key={item.id}>
            {item.edit ? (
              <EditCardSection
                cardData={item}
                onSave={updateCard}
                onCancel={() => toggleEdit(item.id)}
                onDelete={deleteCard}
              />
            ) : (
              <CardSection
                cardData={item}
                onEdit={() => toggleEdit(item.id)}
                onDelete={deleteCard}
              />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
