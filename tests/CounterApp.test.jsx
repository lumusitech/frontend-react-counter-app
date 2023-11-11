import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"

describe('testing on <CounterApp />', () => {

  const value = 10

  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={value} />)
    expect(container).toMatchSnapshot()
  })

  test('should shows initial value 100 <CounterApp value={100} />', () => {
    const value = 100
    render(<CounterApp value={value} />)
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain('100')
  })

  test('should increments when "+1" button is clicked', () => {
    render(<CounterApp value={value} />)
    fireEvent.click(screen.getByText("+1"))
    expect(screen.getByText("11")).toBeTruthy()

    // const buttonAdd = screen.getByRole("button", { name: "+1" })
    // fireEvent.click(buttonAdd)
    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("1")
  })

  test('should decrements when "-1" button is clicked', () => {
    render(<CounterApp value={value} />)
    fireEvent.click(screen.getByText("-1"))
    expect(screen.getByText("9")).toBeTruthy()
  })

  test('should reset when "Reset" button is clicked', () => {
    render(<CounterApp value={value} />)

    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))
    expect(screen.getByText("13")).toBeTruthy()
    // fireEvent.click(screen.getByText("Reset"))
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }))
    expect(screen.getByText("10")).toBeTruthy()
  })
})