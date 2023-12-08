import { render, screen } from '@testing-library/react';
import PigeonNew from '../pages/PigeonNew';
import { BrowserRouter } from 'react-router-dom'

describe("<PigeonNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PigeonNew />
      </BrowserRouter>
    )
  })
  it("renders the PigeonNew page for the user", () => {
    const element = screen.getByText(/Become a LoveBird/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Become a LoveBird!")
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    screen.debug()
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})