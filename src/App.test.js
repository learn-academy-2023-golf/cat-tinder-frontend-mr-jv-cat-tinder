import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe ("<App />", () => {
  it ("renders a greeting", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const greeting = screen.getByText("Get ready to become the wing man or woman in your flock!")
    expect(greeting).toBeInTheDocument()
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
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const footerRightsHeading = screen.getByText(/© 2023 greg & michael\. all rights reserved\./i)
    expect(footerRightsHeading).toBeInTheDocument()
  })  

  it ("renders a link from Navbar", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const headerNavLinkHeading = screen.getByRole('link', {
      name: /see all lovebirds/i
    })
    expect(headerNavLinkHeading).toBeInTheDocument()
  })
})