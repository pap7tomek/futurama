import React from 'react';
import _ from 'lodash';
import './Modal.css';

const Modal = ({ setModalStatus, modalStatus, modalData }) => {
    const showHideClassName = modalStatus ? "modal display-block" : "modal display-none";
    const getQuotes = () => {
        if(modalData.length < 6) return modalData
        let quotes = _.shuffle(modalData);
        return quotes.slice(0, 5)
    }
    return (
        <React.Fragment>
            {modalStatus && <div className={showHideClassName}>
                <section className="modal-main">
                    <img src={modalData[0].image}></img>
                    {getQuotes().map(value => <p>{value.quote}</p>)}
                <button onClick={()=>{setModalStatus(false)}}>Close</button>
                </section>
            </div>}
        </React.Fragment>
    );
};

export default Modal;