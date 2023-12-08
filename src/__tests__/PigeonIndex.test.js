import { render, screen } from '@testing-library/react';
import PigeonIndex from '../pages/PigeonIndex';
import { BrowserRouter } from 'react-router-dom'
import mockPigeons from '../mockPigeons'



describe("<PigeonIndex />", () => {
  it("renders pigeon cards", () => {
    render(
      <BrowserRouter>
        <PigeonIndex pigeons={mockPigeons} />
      </BrowserRouter>
    )
    mockPigeons.forEach(pigeonObject => {
      const pigeonName = screen.getByText(pigeonObject.name)
      expect(pigeonName).toBeInTheDocument()
    })
  })
})