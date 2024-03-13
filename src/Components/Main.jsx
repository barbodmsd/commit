import React from 'react'

export default function Main({hero}) {
    const {name,img,level,description,units}=hero
  return (
    <div className={`clash-card ${name}`}>
          <div className={`clash-card__image clash-card__image--barbarian`}>
            <img
              src={img}
              alt={`barbarian`}
            />
          </div>
          <div className={`clash-card__level clash-card__level--barbarian`}>
            {level}
          </div>
          <div className={`clash-card__unit-name`}>The Barbarian</div>
          <div className={`clash-card__unit-description`}>
            {description}
          </div>

          <div className={`clash-card__unit-stats clash-card__unit-stats--barbarian clearfix`}>
            <div className={`one-third`}>
              <div className={`stat`}>
                20<sup>S</sup>
              </div>
              <div className={`stat-value`}>Training</div>
            </div>

            <div className={`one-third`}>
              <div className={`stat`}>16</div>
              <div className={`stat-value`}>Speed</div>
            </div>

            <div className={`one-third no-border`}>
              <div className={`stat`}>150</div>
              <div className={`stat-value`}>Cost</div>
            </div>
          </div>
        </div>
  )
}
