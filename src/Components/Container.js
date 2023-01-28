import React from 'react';
import Modal from "./Modal.js"

export default class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isShown: false
      }
    }
  
    showModal = () => {
      this.setState({
        isShown: true
      })
    }
  
    closeModal = () => {
      this.setState({
        isShown: false
      })
    }
  
    onKeyDown = (event) => {
      if (event.key === "Escape") {
        this.closeModal();
      };
    }
  
    render() {
      return (
        <div>
          <button onClick={this.showModal}>
            Add event
          </button>
          {this.state.isShown ? <Modal 
            closeModal={this.closeModal.bind(this)} 
            onKeyDown={this.onKeyDown.bind(this)}/> : null}
        </div>
      )
    }
  }