import {gql } from "apollo-boost";

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
