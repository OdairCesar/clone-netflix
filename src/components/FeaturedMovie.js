import React from 'react'
import './FeaturedMovie.css'

export default function FeatureMovie({ item }){
    console.log(item)
    const firstDate = new Date(item.first_air_date)

    const genres = []
    for(let i in item.genres){
        genres.push( item.genres[i].name )
    }

    return(
        <section className='featured' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : null}</div>
                    </div>
                    <div className='featured--description'>{item.overview}</div>
                    <div className='featured--buttons'>
                        <button className='featured--watchbutton'>▶ Assistir</button>
                        <button className='featured--mylistbutton'>+ Minha Lista</button>
                    </div>
                    <div className='featured--genres'>
                        <strong>Gêneros: </strong>
                        {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}