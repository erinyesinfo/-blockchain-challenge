import React from 'react';
import './index.css';

const ModalContent = ({ transaction_number, slot, signature, time, status, instructions }) => (
    <div className='modal-transaction-content'>
        <div className='m-content-wrapper'>
            <div>Transaction No: </div>
            <div>{transaction_number}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Slot: </div>
            <div>{slot}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Signature: </div>
            <div>{signature}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Time: </div>
            <div>{time}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Status: </div>
            <div>{status}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Program Instructions 1: </div>
            <div>{instructions.transaction_instructions_1}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Program Instructions 2: </div>
            <div>{instructions.transaction_instructions_2 || "N/A"}</div>
        </div>
        <div className='m-content-wrapper'>
            <div>Program Instructions 3: </div>
            <div className='m-content-last-child'>{instructions.transaction_instructions_3 || "N/A"}</div>
        </div>
    </div>
);

export default ModalContent;
