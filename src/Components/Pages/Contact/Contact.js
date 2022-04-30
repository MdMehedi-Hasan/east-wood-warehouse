import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.dribbble.com/users/2328616/screenshots/14126196/media/782cf238505d3d1de2e80eeac44092d7.png?compress=1&resize=400x300" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;