import React, {useState} from "react"

import './MovieRow.css'
import NavigateNextBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function MovieRow({items, title}) {
    const [ scrollX, setScrollX] = useState(0)
    const tamItem = window.innerWidth > 576 ? 250 : 150

    const handleLeftArrow =  function (){
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }
    const handleRightArrow =  function (){
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * tamItem
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW - (tamItem === 250 ? 80: 20))
        }
        setScrollX(x)
        
    }


    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateNextBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * tamItem,
                }}>
                    {items.results.length> 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}