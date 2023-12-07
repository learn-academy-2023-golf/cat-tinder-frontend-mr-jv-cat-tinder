import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';

describe ("<App />", () => {
  it ("renders a greeting from Home", () => {
    //arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    //Act
    const homeGreeting = screen.getByText("Get ready to become the wing man or woman in your flock!")
    //Assert
    expect(homeGreeting).toBeInTheDocument()
  })

  it("has a heading", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
  
      const homeHeading = screen.getByRole('heading', {
        name: /Get ready to become the wing man or woman in your flock!/i
      })
      expect(homeHeading).toBeInTheDocument()
  })

  it ("renders a rights reserved heading", () => {
    //arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    const footerRightsHeading = screen.getByText(/© 2023 greg & michael\. all rights reserved\./i)
    //Assert
    expect(footerRightsHeading).toBeInTheDocument()
  })  

  it ("renders a link from Navbar", () => {
    //arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    const headerNavLinkHeading = screen.getByRole('link', {
      name: /see all lovebirds/i
    })
    //Assert
    expect(headerNavLinkHeading).toBeInTheDocument()
  })

  it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>, div)
    })

})