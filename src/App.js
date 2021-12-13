import React, {useEffect, useState} from 'react'
import './App.css';

import apiTMDB from './service/tmdb'

import MovieRow from './components/MovieRow'

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
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow title={item.title} items={item.items} key={key}/>
        ))}
      </section>
      Rodape basico
    </div>
  );
}

export default App;
