import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { Button } from "reactstrap"

const PigeonShow = ({pigeons, deletePigeon}) => {
  const { id } = useParams()
    
  let selectedPigeon = pigeons.find(pigeonObject => pigeonObject.id === +id)
  
    const navigate = useNavigate()
    const handleSubmit = () => {
      deletePigeon(selectedPigeon.id)
      navigate("/pigeonindex")
    }

  return (
    <div className="show-page">
      {selectedPigeon && (
      <>
        <h2>I am {selectedPigeon.name}, age {selectedPigeon.age}.</h2>
        <h3> I enjoy {selectedPigeon.enjoys}</h3>
        <img alt={selectedPigeon.name} src={selectedPigeon.image}/>

          <NavLink to={`/pigeonedit/${selectedPigeon.id}`} className="nav-link">
            <Button onClick={handleSubmit}>Edit LoveBird Profile</Button>
          </NavLink>
          <NavLink to="/pigeonindex">
            <Button onClick={handleSubmit} > Delete LoveBird</Button>
          </NavLink>
      </>
    )}
    </div>
  )
}

export default PigeonShow