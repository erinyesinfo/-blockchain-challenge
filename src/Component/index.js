import React, { useState } from 'react';

import Header from './Header';
import Address from './Address';
import Notfound from './Notfound'

const App = () => {
  const [ view, setView ] = useState(false);
  const [ data, setData ] = useState([]);
  const handleChangeView = () => setView(!view);
  const handleSumbitData = data => setData(data);

  return (
    <>
      <Header view={view} handleChangeView={handleChangeView} handleSumbitData={handleSumbitData} />
      {data === 'error' ? (
        <Notfound />
      ):(
        <Address view={view} data={data} />
      )}
    </>
  );
};

export default App;
