import gql from "graphql-tag"

export default {
  getUser: gql`
    query {
      allFilms {
        id
        director
        title
      }
    }
  `
}
