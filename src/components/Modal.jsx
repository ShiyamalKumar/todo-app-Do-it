import React from 'react';
import '../modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={` modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;