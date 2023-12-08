import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom'

describe ("<Home />", () => {
    it ("renders a header", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      const homeHeader = screen.getByText("Get ready to become the wing man or woman in your flock!")
      expect(homeHeader).toBeInTheDocument()
      })
  })