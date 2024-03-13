import React from 'react'

export default function Sliders() {

  return (
    <div class="slide-container">

        <div class="wrapper">
            <div class="arrow-wrapper">
                <div class="round">
                    <div id="cta">
                        <span class="arrow prev"></span>
                    </div>
                </div>
            </div>
            <div class="clash-card barbarian">
                <div class="clash-card__image clash-card__image--barbarian">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
                </div>
                <div class="clash-card__level clash-card__level--barbarian">Level 4</div>
                <div class="clash-card__unit-name">The Barbarian</div>
                <div class="clash-card__unit-description">
                    The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for
                    destruction. He has Killer yellow horseshoe mustache.
                </div>

                <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                    <div class="one-third">
                        <div class="stat">20<sup>S</sup></div>
                        <div class="stat-value">Training</div>
                    </div>

                    <div class="one-third">
                        <div class="stat">16</div>
                        <div class="stat-value">Speed</div>
                    </div>

                    <div class="one-third no-border">
                        <div class="stat">150</div>
                        <div class="stat-value">Cost</div>
                    </div>

                </div>

            </div> 
            <div class="arrow-wrapper">
                <div class="round">
                    <div id="cta">
                        <span class="arrow next"></span>
                    </div>
                </div>
            </div>

        </div> 




    </div>
  )
}
