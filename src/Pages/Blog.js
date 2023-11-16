import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import top from "../img/top.png";
import share from "../img/share.png";
import youtube from '../img/youtube.png'
import book from '../img/book.png'
 
export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img width={200} height={150} src={top} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>Курсы в академии топ</h5>
                <p>
                  Проходил обучение в академии топ на «Frontend-developer» взял
                  курс от 18.05.2022 по 22.05.2023 имеется диплом об успешном
                  окончании курса   <a href="https://docdro.id/H9yNNcR" target="_blank">  сылка на диплом Download</a>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img width={200} height={150} src={share} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5> SHAREWOOD</h5>
                <p>
                Смотрел различные сливы курсов на сайте
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img width={200} height={150} src={youtube} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>YouTube</h5>
                <p>
                  Смотрел различные видео с разработками , смотрел подкасты. Различных блогеров кто снимает контент в этой сфере  
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img width={200} height={150} src={book} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>Книги</h5>
                <p>
                 Читал книги 'JavaScript с нуля' , 'JavaScript Подробное руководство ', 'Совершенный код' С.Макконелл
                </p>
              </div>
            </div>
            
            
          </Col>
          {/* <Col md="3">
            <h5 className='text-center mt-5'></h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>sadasd</ListGroup.Item>
                <ListGroup.Item>sadasd</ListGroup.Item>
                <ListGroup.Item>sadasd</ListGroup.Item>
                <ListGroup.Item>sadasd</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
