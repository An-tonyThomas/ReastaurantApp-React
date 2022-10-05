import React from 'react'
import Card from 'react-bootstrap/Card';
import{Link} from 'react-router-dom'
        // destructuring
function RestuarantCard({data}) {               
    console.log(data);
  return (
    <Link style={{textDecoration:'none' ,color:'white'}} to={`./restuarant-details/${data.id}`}>
        <Card >
      <Card.Img variant="top" src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
           <p>Cousine: {data.cuisine_type}</p>
           <p>Neighborhood: {data.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestuarantCard