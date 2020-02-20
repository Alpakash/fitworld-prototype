import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/fitworld-icon.svg'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(100px, auto);
    margin-top: 10px;
    `

const Zero = styled.image`
    grid-column: 6;
    grid-row: 1;
    width: "100px";
    height: "100px";
    border-radius: 20px;
    margin-right: -40px;
    text-align: end;
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

const Five = styled.div`
    grid-column: 4/13;
    grid-row: 3;
    width: "100px";
    height: "100px";
    background-color: green;
    border-radius: 20px;    
    text-align: center;
`

const Six = styled.div`
    grid-column: 5/9;
    grid-row: 2;
    width: "100px";
    height: "100px";
    background-color: blue;
    border-radius: 20px;    
    text-align: center;
`

const Grid = () => {
  return (
      <Wrapper>
        <Zero>
          <Logo width={70}/>
        </Zero>
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/>
      </Wrapper>
  )
}

export default Grid