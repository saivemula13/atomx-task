import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const EditCardSection = ({ cardData, onSave, onCancel, onDelete }) => {
  const [editedCard, setEditedCard] = useState({
    name: cardData.name,
    designation: cardData.designation,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditedCard((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className='custom-card p-3 mt-3'>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={editedCard.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId="designation">
        <Form.Label>Designation</Form.Label>
        <Form.Control
          type="text"
          value={editedCard.designation}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button className='me-2' variant="success" onClick={() => onSave(cardData.id, editedCard)}>Save</Button>
      <Button className='me-2' variant="secondary" onClick={onCancel}>Cancel</Button>
      <Button className='me-2' variant="danger" onClick={() => onDelete(cardData.id)}>Delete</Button>
    </section>
  );
};
