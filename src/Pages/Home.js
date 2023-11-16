import React, { Component, useState  } from 'react'

import CarouselBox from '../Components/CarouselBox'
import {  Container, Card, CardGroup,Button} from 'react-bootstrap'


export default class Home extends Component {
  
  render() {
    
    return (
<>
<CarouselBox/>
 {/* <Container className='text-center'>
  <h2 className='text-center m-4'>Поставте лайк  или дизлайк моему сайту</h2>
 <CardGroup>
  <Card border='0'>
<Card.Body>
  <Card.Title> Количество людей посетивших страницу
  </Card.Title>
  <Card.Text className='m-2 fs-2' >0</Card.Text>
  <Button   style={{ width: '100px'}} className='m-2' variant='secondary'>like👍</Button>
  <Card.Text className='m-2 fs-2'>0</Card.Text>
  <Button style={{ width: '100px'}}  className='m-2' variant='secondary'>dislike👎</Button>
  <Card.Text className='m-2 fs-2'>0</Card.Text>
</Card.Body>
  </Card>
 </CardGroup>
 </Container> */}
</>
    )
  }
}
