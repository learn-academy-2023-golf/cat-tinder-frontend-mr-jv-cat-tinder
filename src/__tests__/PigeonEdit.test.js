import { render, screen } from "@testing-library/react";
import PigeonEdit from "../pages/PigeonEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockPigeons from "../mockPigeons"

describe("<PigeonEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/pigeonedit/1"]}>
        <Routes>
          <Route path="pigeonedit/:id" element={<PigeonEdit pigeons={mockPigeons} />} />
        </Routes>
      </MemoryRouter>
    )
  })

  it("renders a LoveBird New Page", () => {
    const text = screen.getByText(/Edit a LoveBird/i)
    expect(text).toBeInTheDocument()
  })

  const arr = ["name", "age", "enjoys", "image"]

  it("has a form with entries for name, age, enjoys, and image", () => {
    arr.forEach((item) => {
      expect(
        screen.getByText(new RegExp("\\b" + item, "i")).getAttribute("for")
      ).toEqual(item)
    })
  })

  it("has a button called 'Submit Updated LoveBird'", () => {
    expect(
      screen.getByRole("button", {
        name: /Submit Updated LoveBird/i,
      })
    ).toBeInTheDocument()
  })
})