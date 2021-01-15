import React from 'react';
import styles from './contact.module.css';
import { backgrounds } from '../../assets/backgrounds';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default function Contact() {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${
          backgrounds[Math.floor(Math.random() * 6)]
        }) repeat center`,
      }}
    >
      <Form>
        <Form.Group size="lg" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" size="lg" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" size="lg" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            size="lg"
            placeholder="please enter message here !!"
          />
        </Form.Group>
        <Button variant="contained" color="secondary">
          Submit Details
        </Button>
      </Form>
    </div>
  );
}
