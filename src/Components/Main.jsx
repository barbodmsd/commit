import React from 'react'
import Units from './Units'

export default function Main({hero}) {
    const {name,img,level,description,units}=hero
  return (
    <div className={`clash-card ${name}`}>
          <div className={`clash-card__image clash-card__image--${name}`}>
            <img
              src={img}
              alt={`${name}`}
            />
          </div>
          <div className={`clash-card__level clash-card__level--${name}`}>
            {level}
          </div>
          <div className={`clash-card__unit-name`}>The ${name}</div>
          <div className={`clash-card__unit-description`}>
            {description}
          </div>

          <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            <Units units={units}/>
          </div>
        </div>
  )
}
