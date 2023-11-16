import React, { Component } from 'react'
import { Container,Form,Button,Col,Nav } from 'react-bootstrap'

export default class Contacts extends Component {
 

  render() {
    return (
      <Container style={{width: '500px'}}>
        <h1 className='mt-3 text-center'>Свяжитесь со мной</h1>
        <Col sm={0} className='text-center ' >
            <h5> тел: 89885539274</h5>
            <h5>Kote61@yandex.ru</h5>
            <h5>Kote61rus@yandex.ru</h5>
            <h5><a href='https://github.com/u3BINI'>GIT</a></h5>
            <h5><a href='https://t.me/u3BiNi'>Telegram</a></h5>
            <h5><a href='https://rostov.hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header'>HH.ru</a></h5>
        
            </Col>
        {/* <Form>
          <Form.Group controlId="formBasicEmail"  className='mt-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email'/>
          <Form.Text >
           О вашем email неузнает никто кроме меня  
          </Form.Text>
          </Form.Group>

<Form.Group controlId='formBasicPassword'  className='mt-3'>
  <Form.Label>Пример текстовой области</Form.Label>
  <Form.Control as='textarea' rows='3'/>
</Form.Group>

<Form.Group controlId='formBasicCheckbox' className='mt-3'>

</Form.Group>

<Button variant='dark' type='submit' className='mt-3'>Go</Button>



        </Form> */}
      </Container>
    )
  }
}
