import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing on FirstApp component', () => {
  // test("should match with snapshot", () => {
  //   const name = "Luciano"
  //   // render Components in memory to test it
  //   const { container } = render(<FirstApp name={name} />)
  //   expect(container).toMatchSnapshot()
  // })

  test("should shows title in h1", () => {
    const title = "Hola, soy Luciano"
    const { container, getByText, getByTestId } = render(<FirstApp title={title} name="Luciano" />)
    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector("h1")
    // expect(h1.innerHTML).toContain(title)
    expect(getByTestId("test-title").innerHTML).toContain(title)
  })

  test('should shows subtitle passed by props', () => {
    const subtitle = "React developer"
    const { getAllByText } = render(<FirstApp name="Luciano" subtitle={subtitle} />)

    // expect(getByText(subtitle)).toBeTruthy()
    expect(getAllByText(subtitle)).toHaveLength(2)
  })
})