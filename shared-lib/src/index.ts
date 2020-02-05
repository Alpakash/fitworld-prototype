// Queries
class Queries {
 getDogs = () => {
   `
  {
    dogs {
      id
      breed
    }
  }
`
 }
}

// Mutations
class Mutations {

}

// Object with state
class GlobalState {
  state = () => {
    {

    }
  }
}

// Column lib: grid size 12 column + gutter size 5px
class GridSystem {

}

// Styling in lib
class Styling {

}

export { Queries, Mutations, GlobalState, GridSystem, Styling }
