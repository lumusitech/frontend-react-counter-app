import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('tests on 02-template-string', () => {
  test('getSaludo debe retornar "Hola Fernando"', () => {
    const name = "Luciano"
    const message = getSaludo(name);
    expect(message).toBe("Hola Luciano")
  })
})