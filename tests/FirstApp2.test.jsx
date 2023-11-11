import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe("testing on FirstApp2 component", () => {

  const title = "Hola, soy Luciano"
  const subtitle = "Soy un subtitulo"

  test('should match with snapshot', () => {
    const { container } = render(<FirstApp name="Luciano" title={title} subtitle="" />)

    expect(container).toMatchSnapshot()
  })

  test('should shows message "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
    // Sirve para ver que se muestra en pantalla al momento
    // screen.debug()
  })

  test('should shows title in h1', () => {
    render(<FirstApp title={title} />)

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title)
  })

  test('should shows subtitle passed by props', () => {
    render(<FirstApp subtitle={subtitle} />)
    expect(screen.getAllByText(subtitle).length).toBe(2)
  })
})