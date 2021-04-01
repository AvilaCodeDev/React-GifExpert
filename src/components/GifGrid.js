import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categorie } ) => {
  
  
  const { data:images, loading } = useFetchGifs( categorie );   

    return (
      <>
        <h3> { categorie } </h3>  
        { loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
            {
              images.map( image => (
                <GifGridItem 
                  key = { image.id }
                  {...image}
                />
              ) )
            }
        </div>
      </>
    )
}
