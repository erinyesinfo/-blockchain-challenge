import React, { Component } from 'react';
import SERVER from '../../API';
import './index.css';

import Address from './Address';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: this.props.data || [],
      colors: [
        {
          backgroundImage: 'linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)',
          backgroundBlendMode: 'normal, lighten, soft-light'
        },
        {
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
          backgroundBlendMode: 'multiply,multiply'
        },
        { backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)' },
        { backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' },
        { backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)' },
        { background: 'blue' },
        { backgroundImage: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)' },
        { backgroundImage: 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)' },
        { backgroundImage: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)' },
        { backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)' },
      ]
    };
  };

  async componentDidMount() {
    if (this.props.data.length === 0) {
      let api = await SERVER.get("/read");
      this.setState({ addresses: api.data })
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data)
    this.setState({ addresses: this.props.data })
  }

  renderAddresses = () => (
    this.state.addresses.map((address, i) => (
      <Address key={address.signature} transaction_number={address.transaction_number}
        slot={address.slot}
        signature={address.signature}
        time={address.time}
        status={address.status}
        instructions={address.instructions}
        bg={this.state.colors[i]}
        view={this.props.view}
      />
    ))
  );

  render() {
    return (
      <div className={this.props.view ? 'address-view':'address'}>
        {this.props.view ? (
          <div className='name-view'>
            <div>Slot</div>
            <div className='view-date'><span>|</span> Date</div>
          </div>
        ):null}
        {this.renderAddresses()}
      </div>
    );
  };
};

export default App;
