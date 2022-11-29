import React, { useState } from 'react';
import SERVER from '../../API';

import Logo from '../../media/Logo_dark.png';
import ViewChanger from './Icon';
import './index.css';

const Headers = ({ view, handleChangeView, handleSumbitData }) => {
  const [ search, setSearch ] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      /*
       * Fake address:
       *  EDMGEpKKGKS7nxpu1gjLmuHHWAmvLNy3BZWDxNC3nhAt
      */
      let api = await SERVER.post("/update", { address: search });
      handleSumbitData(api.data);
    } catch(e) {
      handleSumbitData('error');
    }
  };
  return (
    <div className='header'>
      <div className='header-first'>
        <img width="40" src={Logo} alt="logo_dark" />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Type an address'
                onChange={(e) => setSearch(e.target.value.trim())} value={search}
            />
            <button type='submit'>
                <svg width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.24 383.25"><g id="Loope_2" data-name="Loope 2"><g className='loop' id="Loope_1-2" data-name="Loope" fill='darkgray'><path id="Loope" d="M161.68,0c7.71,1.39,15.52,2,23.2,3.66C244,16.6,290.86,65.51,301,125.34c7.37,43.58-2.47,83.12-29,118.45-1.89,2.52-2,3.75.34,6q52.5,52.26,104.84,104.7c4.75,4.74,7.31,10.05,5.49,16.83a15.84,15.84,0,0,1-25.38,8.3,46.2,46.2,0,0,1-3.53-3.33q-51.6-51.58-103.13-103.24c-2.67-2.69-4.17-3.17-7.45-.65-62.9,48.31-153.78,38.95-205.61-21C16,226.53,3.58,197.75.64,164.91A28.36,28.36,0,0,0,0,161.68V141.47a20.88,20.88,0,0,0,.63-2.88A144.19,144.19,0,0,1,21.24,74.52C44.78,36,78.69,11.83,123.11,2.85,129.18,1.63,135.35.94,141.47,0ZM271.51,151.71c0-66-53.59-119.56-119.7-119.7S32.2,85.34,32,151.5s53.75,120.12,119.76,120S271.53,217.55,271.51,151.71Z"></path></g></g></svg>
            </button>
        </form>
      </div>
      <span onClick={handleChangeView} className='icon-wrapper'>
        <ViewChanger view={view} />
      </span>
    </div>
  );
};

export default Headers;