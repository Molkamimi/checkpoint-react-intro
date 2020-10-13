import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap/';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    
    <div className="App">
    
      
      <Nav className="mr-auto">
      
      <Navbar.Brand href="#home">Welcome to my website</Navbar.Brand>
      
      <Nav.Link href="#features">Features</Nav.Link>
      
      <NavDropdown title="PLUS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About me</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">comments</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Read more</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Invitations</NavDropdown.Item>
        
      </NavDropdown>
       <Navbar.Text>
      <div className="Sign in">
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
       <a href="#login">Sign in </a>
       </div>
    </Navbar.Text>
    <Image src= "https://thumbs.dreamstime.com/b/checklist-color-icon-isolated-vector-illustration-white-background-93594025.jpg" fluid /> 
    </Nav>
<div class ="col-7" className="form1">
<Form >
  <Form.Group controlId="formGroupQuestionnaire">
    <Form.Label>Title</Form.Label>
    <Form.Control type="Questionnaire  about ourselves" placeholder="Questionnaire to learn more about ourselves" />
  </Form.Group>
  <Form.Group controlId="formGroupPlace">
    <Form.Label>Place(Optional)</Form.Label>
    <Form.Control type=" Place (or with conference call?)" placeholder=" Place (or with conference call?)"  />
    
  </Form.Group>
  <Form.Group controlId="formGroupDescription">
    <Form.Label>Desciption (Facultatif)</Form.Label>
    <Form.Control type="Hi
 I am using this questionnaire to learn more about ourselves " placeholder=" Hi,  I am using this questionnaire to learn more about ourselves" />
  </Form.Group>
  <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Enter your name" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" />
  </Form.Group>
</Form>
<Form>
  <Form.Label>Ages</Form.Label>
  <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
  <option value="0">Choose</option>
        <option value="1">Between 20 and 25</option>
        <option value="2">Between 25 and 30</option>
        <option value="3">Between 30 and 35</option>
        </Form.Control>
        </Form>
        <Form>
  <Form.Label>State</Form.Label>
  <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
  <option value="0"></option>
        <option value="1">Single</option>
        <option value="2">Married</option>
        <option value="3">Divorced</option>
        <option value="4">Widow</option>
        </Form.Control>
        </Form>
<Form>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Series prefered from the best to the worst select</Form.Label>
    <Form.Control as="select">
    <option>...  </option>
      <option>*****La Casa De Papel   </option>
      <option>****Dark</option>
      <option>***LOCKE & KEY</option>
      <option>**Marianne</option>
      <option>*Glow</option>
      </Form.Control>
  </Form.Group>
  </Form>
  <Form>
  <Form.Label>Select type of films prefered</Form.Label>
  {['checkbox', 'radio'].reduce((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
      <Form.Check
        custom
        inline
        label="Horror"
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="Advanture"
        type={type}
        id={`custom-inline-${type}-2`}
      />
      <Form.Check
        custom
        inline
       
        label="Romantic"
        type={type}
        id={`custom-inline-${type}-3`}
      />
    </div>
  ))}
</Form>
<Form>
  <Form.Label>Hobbies</Form.Label>
  {['checkbox', 'radio'].reduce((type) => (
    <div key={`custom-inline-${type}`} className="mb-4">
      <Form.Check
        custom
        inline
        label="Danse"
        type={type}
        id={`custom-inline-${type}-4`}
      />
      <Form.Check
        custom
        inline
        label="Travelling"
        type={type}
        id={`custom-inline-${type}-5`}
      />
      <Form.Check
        custom
        inline
       
        label="Practising Sports"
        type={type}
        id={`custom-inline-${type}-6`}
      />
      <Form.Check
        custom
        inline
        label="Decoration and designing"
        type={type}
        id={`custom-inline-${type}-7`}
      />
    </div>
  ))}
</Form>
<Form>
  <Form.Label as="legend" column sm={2}>
       Are you addicted by the Net ?    </Form.Label>
      
        <Form.Check
          type="radio"
          label="yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
       
 </Form>
  
 <Form>
  <Form.Label as="legend" column sm={2}> How long do you stay  in front of the screen?
        </Form.Label>
      
        <Form.Check
          type="radio"
          label="1hour"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="2hrs"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label=">24hrs"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
 </Form>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</div>
    </div>
  );
}

export default App;
