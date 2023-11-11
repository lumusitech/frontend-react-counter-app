import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('tests on 08-imp-exp.js', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1
    const heroe = getHeroeById(id)

    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })

  })
  test('getHeroeById debe retornar undefine si no existe el ID', () => {
    const id = 100
    const heroe = getHeroeById(id)

    expect(heroe).toBeFalsy()

  })

  test('getHeroesByOwner Debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'

    const heroes = getHeroesByOwner(owner)

    expect(heroes).toHaveLength(3)
  })

  test('getHeroesByOwner Debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'

    const heroes = getHeroesByOwner(owner)

    expect(heroes).toHaveLength(2)

    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === "Marvel"))
  })
})