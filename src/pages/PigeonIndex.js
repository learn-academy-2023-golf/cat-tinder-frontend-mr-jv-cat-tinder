import React from 'react'
import pigeons from '../mockPigeons'
import { Card, CardBody, CardSubtitle, CardTitle, NavLink, Button } from 'reactstrap'

const PigeonIndex = ({ pigeons }) => {
  // console.log(pigeons)
  
    
    return (
      <div className="index-page">
      <h1>Swoop and Fly the Streets to find your match for life!</h1>
      <div className="card-flex">
      {pigeons.map((pigeonObject, index) => (
        <Card
          key={index}
          style={{
            width: '18rem',
          }}
        >
          <img alt="Sample" src={pigeonObject.image} />
          <CardBody>
            <CardTitle tag="h5">{pigeonObject.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {pigeonObject.age}
            </CardSubtitle>
              <NavLink to={`/pigeonshow/${pigeonObject.id}`}>
               <Button>
               Get to know more about me!
               </Button> 
              </NavLink>
          </CardBody>
        </Card>
      ))}
      </div>
      </div>
  )
}

export default PigeonIndex

