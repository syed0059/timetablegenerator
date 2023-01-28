import React from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDOM from 'react-dom';



const Modal = ({closeModal, onKeyDown}) => {
    return ReactDOM.createPortal(
      <FocusTrap>
        <aside tag="aside" role="dialog" tabIndex="-1" aria-modal="true" className="modal-cover" onKeyDown={onKeyDown}>
          <div>
            <button onClick={closeModal}>X</button>
          </div>
          <div>
            <form>
              <input placeholder='Test'></input>
            </form>
          </div>
        </aside>
      </FocusTrap>, document.body
    );
  }

  export default Modal;
  