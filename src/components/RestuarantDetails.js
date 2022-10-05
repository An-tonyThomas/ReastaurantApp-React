import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Col,Row,Image, ListGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function RestuarantDetails() {
  const params=useParams()
  // console.log(params.id);
  const [items,setItems]=useState([])
      async function fetchData(){
          await fetch('/restaurants.json')
          .then((result)=>{
              result.json()
               .then((data)=>{
                  setItems(data.restaurants)
              })
          })
          }
      useEffect(()=>{
          fetchData()
      },[])
      const restDetails=items.find((items)=>(
        items.id==params.id
      ))
      console.log(restDetails);
    return (
      <div>
        {
          restDetails?(
           <Row>
            <Col>
            <Image className='m-5' style={{width:"70%"}} src={restDetails.photograph} fluid/>
            </Col>
            <Col>
            <h2 className='my-5'>{restDetails.name}</h2>
            <h4>Cusine:{restDetails.cuisine_type}</h4>
            <h4>Near:{restDetails.neighborhood}</h4>
            <h4>Address:{restDetails.address}</h4>
            </Col>
            <Col>
            <ListGroup className='md-5 my-5'>Working Hours :
            <ListGroup.Item>Monday:{restDetails.operating_hours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday:{restDetails.operating_hours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday:{restDetails.operating_hours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday:{restDetails.operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday:{restDetails.operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday:{restDetails.operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday:{restDetails.operating_hours.Sunday}</ListGroup.Item>

            </ListGroup>
            </Col>

           
           </Row>
          ):''
        }
      </div>
    )}
export default RestuarantDetails