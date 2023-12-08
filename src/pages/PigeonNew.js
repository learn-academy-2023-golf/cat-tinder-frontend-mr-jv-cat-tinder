import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from 'react-router-dom'


const PigeonNew = ({createPigeon}) => {
  const navigate = useNavigate()

  const [newPigeon, setNewPigeon] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
   setNewPigeon({...newPigeon, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = () => {
    createPigeon(newPigeon)
    navigate("/pigeonindex")
  }


  return (
    <>
    <h1>Become a LoveBird!</h1>
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
          Submit LoveBird
        </Button>
      </Form>
    </>
  )
}

export default PigeonNew