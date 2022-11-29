import React, { Component } from 'react';

import Modal from './Modal';
import ModalContent from './Modal/Content';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hover: false
    };
  };
  handleMouseOn = () => !this.state.hover ? this.setState({ hover: true }):null;
  handleMouseOff = () => this.state.hover ? this.setState({ hover: false }):null;
  
  handleShowModal = () => this.setState({ modal: true });
  handleCloseModal = () => this.setState({ modal: false });
  renderModalContent = () => (
    <ModalContent transaction_number={this.props.transaction_number}
      slot={this.props.slot}
      signature={this.props.signature}
      time={this.props.time}
      status={this.props.status}
      instructions={this.props.instructions}
    />
  );
  renderModal = () => {
    return (
      <Modal handleCloseModal={this.handleCloseModal}
        modal={this.state.modal}
        renderModalContent={this.renderModalContent}
      />
    );
  };

  render() {
    const { modal, hover } = this.state;
    const { slot, time, signature, bg, view } = this.props;

    const style = bg.backgroundBlendMode ? {
      background: bg.background || bg.backgroundImage,
      backgroundBlendMode: bg.backgroundBlendMode
    }:{
      backgroundImage: bg.backgroundImage
    };
    if (view) {
      return (
        <>
          <div className='transaction-view' onClick={this.handleShowModal} onMouseEnter={this.handleMouseOn} onMouseLeave={this.handleMouseOff}>
            <div className='top-view'>
              <div className='folder' style={style}>
                <div></div>
                <div style={style}></div>
              </div>
              <div className="slot-view">
                {slot}
              </div>
              <div className="time-view">
                {time}
              </div>
            </div>
            {hover ? (
              <div className='transaction-content-view'>
                {signature}
              </div>
            ):null}
          </div>
          {modal ? (
            this.renderModal()
          ):null}
        </>
      );
    }
    return (
      <>
        <div className='transaction' onClick={this.handleShowModal} onMouseEnter={this.handleMouseOn} onMouseLeave={this.handleMouseOff}>
          <div className='transaction-header' style={style}>
            <div className={hover ? "slot-hover":"slot"}>
              {hover ? time.toString():slot}
            </div>
          </div>
          <div className='transaction-content'>
            {signature}
          </div>
        </div>
        {modal ? (
          this.renderModal()
        ):null}
      </>
    );
  };
};

export default Address;
