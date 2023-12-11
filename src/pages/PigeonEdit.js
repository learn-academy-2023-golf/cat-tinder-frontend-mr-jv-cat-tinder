import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from 'react-router-dom'


const PigeonEdit = ({ pigeons, updatePigeon }) => {
  const { id } = useParams()
  let currentPigeon = pigeons?.find((pigeon) => pigeon.id === +id)

  const navigate = useNavigate()
  

  const [editPigeon, setEditPigeon] = useState({
    name: currentPigeon?.name,
    age: currentPigeon?.age,
    enjoys: currentPigeon?.enjoys,
    image: currentPigeon?.image
  })
  
  const handleSubmit = () => {
    updatePigeon(editPigeon, currentPigeon?.id)
    navigate("/pigeonindex")
  }

  const handleChange = (e) => {
   setEditPigeon({...editPigeon, [e.target.name]: e.target.value})
  }

  return (
    <>
    <h1>Edit a LoveBird!</h1>
    <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            placeholder="How old are you?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            name="enjoys"
            placeholder="What do you enjoy?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            placeholder="Please add image url"
            type="url"
            onChange={handleChange}
          />
        </FormGroup>
          <Button onClick={handleSubmit}>
          Submit Updated LoveBird
          </Button>
      </Form>
    </>
  )
}
  
export default PigeonEdit