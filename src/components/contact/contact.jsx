import React from 'react';
import styles from './contact.module.css';
import { backgrounds } from '../../assets/backgrounds';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';

export default function Contact() {
  const [values, handleChange] = useForm({ name: '', email: '', message: '' });
  const handleSubmit = () => {
    console.log('values are', values);
  };
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${backgrounds[3]}) repeat center`,
      }}
    >
      <Form>
        <Form.Group size="lg" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            size="lg"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            size="lg"
            placeholder="please enter message here !!"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Submit Details
        </Button>
      </Form>
    </div>
  );
}
