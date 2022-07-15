import React, { useState, useRef } from 'react';

const ModalBox = ({ isOpen, handleModalClick }) => (
    <div className={`modal-container ${isOpen ? 'is-active' : ''}`}>
        <div className="modal">
            <label>
                <input type="checkbox" /> this is option one
            </label>
            <label>
                <input type="checkbox" /> this is option two
            </label>
            <label>
                <input type="checkbox" /> this is option three
            </label>

            <hr />
            <button className="button-default" onClick={handleModalClick}>cancel</button>
            <button className="button-primary" onClick={handleModalClick}>save</button>
        </div>
    </div>
);


export default () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const groupsInputRef = useRef(null);

    const onModalClick = () => {
        setModalIsOpen(false);
        groupsInputRef.current.focus();
    };

    return (
        <section>
            <form className="fancy-form">
                <label>Name</label>
                <input type="text" />
                <label>Current role</label>
                <input type="text" />
                <label>Groups</label>
                <input type="text" ref={groupsInputRef} />
                <button type="button" onClick={() => setModalIsOpen(true)}>select groups</button>
                <label>Message</label>
                <textarea></textarea>
                <hr />            
                <button className="button-primary">submit form</button>
            </form>
            <ModalBox isOpen={modalIsOpen} handleModalClick={onModalClick}/>
        </section>
    );
};