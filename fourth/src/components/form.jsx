import React, {useEffect} from 'react';
import {withFormik, Form, Field, Formik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'


function validateGuests(value) {
    let error
    if (!value) {
        error = ''
    } else if (/^[A-Za-z]/i.test(value)) {
        error = '*Please enter only numbers'
    }
    return error
}

export const FormApp = () => (
  <div className="contact" id="bottom">
    <h1>How can you reach us?</h1>
    <p>Please use the form below to let us know if you're coming and what you're bringing!</p>

    <Formik
      initialValues={{
        name: '',
        guests: '',
        dishes: '',
      }}
      onSubmit={(values, {resetForm}) => {
        const url = 'https://reid-family-site.herokuapp.com/info'

        axios
            .post(url, values)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        resetForm()
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating, resetForm, initialValues }) => (
        <Form>
            <label>Your Name:</label>
          <Field name="name" />
          
            <label>Number of guests:</label>
          <Field name="guests" validate={validateGuests}/>
          {errors.guests && touched.guests && <div className="error">{errors.guests}</div>}
            <label>What you're bringing:</label>
          <Field component="textarea" name="dishes" rows="4" cols="58"></Field>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>

        <div className="contact-p">
            <p>Feel free to contact us at 412-257-0097 or joanreid@reid-home.com with any questions.</p>
        </div>
            <p>We look forward to hearing from you!</p>
        <div className="contact-a">
            <a href="#top">&#8593; Back to top</a>
        </div>
  </div>
)