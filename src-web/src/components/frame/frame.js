import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../../fitworld-icon.svg'

const FitWorldLogo = styled(Logo)`
    margin-left: 10px;
    width: 60px;
    height: 70px;
    display: flex;
    align-items: center;
    `

class Frame extends Component {
  render() {
    return (
      <div className="title-bar">
        <FitWorldLogo/>
        <div className="window-controls-container">
          <button id="minimize-button" className="minimize-button"/>
          <button id="min-max-button" className="min-max-button"/>
          <button id="close-button" className="close-button"/>
        </div>
      </div>
    )
  }
}

export default Frame