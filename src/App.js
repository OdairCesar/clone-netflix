import React, {useEffect, useState} from 'react'
import './App.css';
import apiTMDB from './service/tmdb'

function App() {
  const [ movieList, setMovieList ] = useState([])

  useEffect(() => {
    const loadAll = async() =>{
      let list = await apiTMDB.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      Header
      Destaque
      As Listas
      Rodape basico
    </div>
  );
}

export default App;
