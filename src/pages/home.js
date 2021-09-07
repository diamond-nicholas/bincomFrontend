/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './home.css';

const home = () => {
  const [allPol, setAllPol] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getAllPol = async () => {
    try {
      const res = await axios.get('https://bincomproj.herokuapp.com/api/v1/pu');
      setLoading(true);
      setAllPol(res.data);
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPol();
  }, []);
  // console.log({
  //   event: allPol.data?.pollingUnits.rows,
  // });

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <div className='container'>
        <h1>
          <span>B</span>
          <span>i</span>
          <span>n</span>
          <span>c</span>
          <span>o</span>
          <span className='last'>m</span> interview project
        </h1>

        <p className='about'>
          This is a project built with Node js and express, which uses
          Postgresql as a database and React as the frontend
        </p>
        <div className='getallpol'>
          <div className='inner'>
            <h2>This fetches the polling units data</h2>
            <div className='show'>
              {allPol.data?.pollingUnits.rows.map(
                ({ uniqueid, polling_unit_name, polling_unit_number }) => (
                  <p key={uniqueid} className='card-heading'>
                    {`${polling_unit_name}`}: {`${polling_unit_number}`}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
