import React from 'react'
import {useEffect} from 'react'
import RestuarantCard from './RestuarantCard'
import {Col,Row} from 'react-bootstrap'
import {RestuarantList} from '../actions/restuarantAction'
import {useDispatch,useSelector} from 'react-redux'

function Dashboard() {
    // const [items,setItems]=useState([])
    // async function fetchData(){
    //     await fetch('/restaurants.json')
    //     .then((result)=>{
    //         result.json()
            
    //         .then((data)=>{
    //             setItems(data.restaurants)
    //         })
    //     })
        
    // }
    const dispatch=useDispatch()
    const result= useSelector((state)=>state.restuarantReducer)
    const {restuarant}=result
    console.log(restuarant);
    useEffect(()=>{
        // fetchData()
        dispatch(RestuarantList())
    },[])
  return (
    <Row>
       {
        restuarant.map((items)=>(
           <Col className='my-3'  xl={3} lg={4} md={6}>
            <RestuarantCard data={items}/>
           </Col>
        ))
       }
    </Row>
  )


}
// import { Form } from 'react-router-dom'

export default Dashboard