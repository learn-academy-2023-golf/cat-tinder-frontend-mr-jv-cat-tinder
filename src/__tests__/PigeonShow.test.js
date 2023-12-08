import { render, screen } from '@testing-library/react';
import PigeonShow from '../pages/PigeonShow';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import mockPigeons from '../mockPigeons'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/pigeonshow/1"]}>
      <Routes>
        <Route path="pigeonshow/:id" element={<PigeonShow pigeons={mockPigeons} />}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<PigeonShow />", () => {
  it("renders pigeon enjoys", () => {
    renderShow()
    expect(screen.getByText(`I enjoy ${mockPigeons[0].enjoys}`)).toBeInTheDocument()
  })
})