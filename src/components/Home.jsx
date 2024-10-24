import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddBook from './AddBook';

function Home() {

  return (
    <>
      <div className="container align-items-center">
        <div className="content">
            <img src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png" alt="" />
           <h1>Welcome to BookLib</h1>
           <p>This is a simple library management system.</p>
        </div>
      </div>
      <div className="d-flex">
      <AddBook/>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
    </>
  )
}

export default Home
// Develop a book management application to handle adding, viewing, editing, and deleting books.

// Implement Redux for state management, allowing for scalable state handling across components.

// Get familiar with handling forms, controlled inputs, and dispatching actions to the Redux store. 