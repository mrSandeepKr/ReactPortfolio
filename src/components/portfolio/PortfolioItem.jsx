import React from 'react'

const PortfolioItem = (
    model
) => {
    model = model.model

    return (
        <article className='portfolio__item'>
            <div className='porfolio__item-image'>
                <img src = {model.imageURL}  alt = {model.title}/>
            </div>

            <div className='portfolio__item-details'>
                <h3>{model.title}</h3>
                <a href={model.projectURL} className='btn' target ='_blank'>LINK</a>
            </div>
        </article>
    )
}

export default PortfolioItem