import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Item from './Item';
import Modal from './Modal';

const characters = [
  'Dr-Zoidberg',
  'Giant-Bender',
  'Professor-Farnsworth',
  'Zapp-Brannigan',
  'Bender',
  'Amy',
  'Hermes',
  'Robot-Mob',
  'Bob Barker',
  'Lurr'
]

function App() {
  const [data, setData] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState([]);
  const openModal = (character) => {
    setModalStatus(true);
    setModalData(character);
  }
  useEffect(() => {
    const getCharacterInfo = async (name) => {
      const response = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${name}`)
      response.data.quoteNumber = Math.floor(Math.random()*response.data.length);
      return Promise.resolve(response.data)
    }
    const getData = async () => {
      return Promise.all(characters.map(async(value) => {
        return await getCharacterInfo(value)
      }))
    }
    getData().then(fetchedData => {
      setData(fetchedData)
    })
  }, []); 
  return (
    <div className="App">
      {data.map(value => <Item key={value[0].character} character={value} openModal={openModal}/>)}
      <Modal setModalStatus={setModalStatus} modalStatus={modalStatus} modalData={modalData}/>
    </div>
  );
}

export default App;
