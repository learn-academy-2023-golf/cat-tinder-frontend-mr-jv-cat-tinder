import React from 'react'
import { useParams } from 'react-router-dom'

const PigeonShow = ({pigeons}) => {
  const {id} = useParams()
    // console.log(id)
  let selectedPigeon = pigeons.find(pigeonObject => pigeonObject.id === +id)
  console.log(selectedPigeon)
  
  return (
    <div className="show-page">
      {selectedPigeon && (
      <>
        <h2>I am {selectedPigeon.name}, age {selectedPigeon.age}.</h2>
        <h3> I enjoy {selectedPigeon.enjoys}</h3>
        <img alt={selectedPigeon.name} src={selectedPigeon.image}/>
      </>
    )}
    </div>
  )
}

export default PigeonShow