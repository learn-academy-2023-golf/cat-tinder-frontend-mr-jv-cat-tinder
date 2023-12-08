import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe ("<Header />", () => {
    it ("renders a link from Navbar", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      const headerNavLinkHeading = screen.getByRole('link', { name: /see all lovebirds/i })
      expect(headerNavLinkHeading).toBeInTheDocument()
    })
  })