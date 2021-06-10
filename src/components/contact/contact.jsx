import React from 'react';
import styles from './contact.module.css';
import { backgrounds } from '../../assets/backgrounds';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Input from '../../common/form/input';
import TextArea from '../../common/form/textArea';

export default function Contact() {
  const onSubmit = (values) => {
    console.log('submitted values', values);
  };
  const initialValues = {
    name: '',
    email: '',
    comments: '',
  };
  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    comments: yup.string().required(),
  });

  return (
    <div
      className={styles.container}
      style={{
        background: `url(${backgrounds[3]}) repeat center`,
      }}
    >
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Name here"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email here"
            />
            <TextArea
              label="Comments"
              name="comments"
              placeholder="Enter comments here"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
