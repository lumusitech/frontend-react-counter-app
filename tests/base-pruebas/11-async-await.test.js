import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('tests on 11-async-await.js', () => {
  test("getImagen debe de retornar un error sin apiKey", async () => {
    const url = await getImagen();

    expect(url).toBe('No se encontró la imagen')

  })
})