import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'

describe ("<Footer />", () => {
    it("has a heading", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
    //   screen.logTestingPlaygroundURL()
      const footerHeading = screen.getByRole('heading', {
        name: /Footer/i
      })
      expect(footerHeading).toBeInTheDocument()
      })
  
  })