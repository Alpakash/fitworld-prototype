import React, { Component } from 'react'

class Frame extends Component {
  render() {
    return (
        <div className="title-bar">
          <div className="app-name-container" />
          <div className="window-controls-container">
            <button id="minimize-button" className="minimize-button" />
            <button id="min-max-button" className="min-max-button" />
            <button id="close-button" className="close-button" />
          </div>
      </div>
    )
  }
}

export default Frame