import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom'

describe ("<NotFound />", () => {
    it("has a heading", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      screen.debug()
      const notFoundHeading = screen.getByRole('heading', {
        name: /NotFound/i
      })
      expect(notFoundHeading).toBeInTheDocument()
      })
  
  })