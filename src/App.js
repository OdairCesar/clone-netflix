import React, {useEffect, useState} from 'react'
import './App.css'

import apiTMDB from './service/tmdb'

import MovieRow from './components/MovieRow'
import FeatureMovie from './components/FeaturedMovie'
import Header from './components/Header'

function App() {
  const [ movieList, setMovieList ] = useState([])
  const [ featuredData, setFeaturedData ] = useState(null)
  const [ blackHeader, setBlackHeader ] = useState(false)

  useEffect(() => {
    //Pegando a listas das categorias
    const loadAll = async() =>{
      const list = await apiTMDB.getHomeList()
      setMovieList(list)

      //Pegando o filme que ficará no destaque. Ele será aletoria e será também um original da netflix
      const originals = list.filter(item => item.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen]
    
      //Como as infomações do filme é incompletas, é feito uma nova pesquisa, para ter todas as informações do filme
      const chosenInfo = await apiTMDB.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 15){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>
      <Header black={blackHeader}/>
      {featuredData ? <FeatureMovie item={featuredData} /> : null}
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow title={item.title} items={item.items} key={key}/>
        ))}
      </section>
      <footer>
        Feito com carinho pela B7Week e Odair<br />
        Direitos de imagem para a Netflix<br />
        Dados pegos da TheMovieDataBase
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://c.tenor.com/Rfyx9OkRI38AAAAM/netflix-netflix-startup.gif' alt='loading'/>
        </div>}
    </div>
  );
}

export default App;
