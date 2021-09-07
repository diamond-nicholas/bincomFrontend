/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './home.css';

const home = () => {
  // const [allPol, setAllPol] = useState([]);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  // const getAllPol = async () => {
  //   try {
  //     const res = await axios.get('https://bincomproj.herokuapp.com/api/v1/pu');
  //     setLoading(true);
  //     setAllPol(res.data);
  //   } catch (error) {
  //     setError(error.message, 'something went wrong while requesting posts');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllPol();
  // }, []);
  // console.log({
  //   event: allPol,
  // });

  // if (error) return <h1>{error}</h1>;
  return (
    <div>
      <div className='container'>
        <h1>Welcome to this Bincom interview project</h1>

        <p>
          This is a simple project built with Node js and express, which uses
          Postgresql as a database and React as the frontend
        </p>
        <button className='btn'>Getting started</button>
      </div>
    </div>
  );
};
export default home;
