import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('tests on 09-promesas.js', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBeTruthy()
      expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })
      done()
    })
  })

  test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy()
        done()
      })

      .catch(error => {
        expect(error).toBeTruthy()
        expect(error).toBe('No se pudo encontrar el héroe')
        done()
      })
  })
})