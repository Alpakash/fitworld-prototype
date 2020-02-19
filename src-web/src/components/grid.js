import React from 'react'
import styled from 'styled-components'
// CSS Grid

// Next steps (more complex):
// <Grid>
// <Col>

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(100px, auto);
    `

const One = styled.div`
    grid-column: 1/3;
    grid-row: 1;
    width: "100px";
    height: "100px";
    background-color: red;
    border-radius: 20px;
    text-align: center;
`

const Two = styled.div`
    grid-column: 3;
    grid-row: 1;    
    width: "100px";
    height: "100px";
    background-color: gray;
    border-radius: 20px;
        text-align: center;
`

const Three = styled.div`
    grid-column: 2;
    grid-row: 2/5;
    width: "100px";
    height: "100px";
    background-color: gray;
    border-radius: 20px;    
    text-align: center;
`


const Four = styled.div`
    grid-column: 3;
    grid-row: 4;
    width: "100px";
    height: "100px";
    background-color: yellow;
    border-radius: 20px;    
    text-align: center;
`

const Grid = () => {
  return (
    <Wrapper>
      <One>
        one
      </One>

      <Two>
        two
      </Two>

      <Three>
        three
      </Three>

      <Four>
        four
      </Four>
    </Wrapper>
  )
}

export default Grid

const hello = {}