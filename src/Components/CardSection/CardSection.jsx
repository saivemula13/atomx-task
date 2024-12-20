import React from 'react';
import { Button } from 'react-bootstrap';

export const CardSection = ({ cardData, onEdit, onDelete }) => {
  return (
    <section className='custom-card p-3 mt-3'>
      <h3>Name: {cardData.name}</h3>
      <h4>Designation: {cardData.designation}</h4>
      <Button className='me-2' variant="info" onClick={onEdit}>Edit</Button>
      <Button className='me-2' variant="danger" onClick={() => onDelete(cardData.id)}>Delete</Button>
    </section>
  );
};
