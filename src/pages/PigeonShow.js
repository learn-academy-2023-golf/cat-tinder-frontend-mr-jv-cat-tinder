import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const PigeonShow = ({pigeons}) => {
  const { id } = useParams()
    
  let selectedPigeon = pigeons.find(pigeonObject => pigeonObject.id === +id)
  
  return (
    <div className="show-page">
      {selectedPigeon && (
      <>
        <h2>I am {selectedPigeon.name}, age {selectedPigeon.age}.</h2>
        <h3> I enjoy {selectedPigeon.enjoys}</h3>
        <img alt={selectedPigeon.name} src={selectedPigeon.image}/>

          <NavLink to={`/pigeonedit/${selectedPigeon.id}`} className="nav-link">
            Edit LoveBird Profile
          </NavLink>
      </>
    )}
    </div>
  )
}

export default PigeonShow