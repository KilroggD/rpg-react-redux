import React from 'react';
import {connect} from 'react-redux';

import {HERO_CLASSES_MAP} from '../constants';

const GameUI = ({heroClass}) => {
    const {className, portrait} = HERO_CLASSES_MAP[heroClass];
    const {sx, sy} = portrait;

    return (
        <div className="game-ui">
            <div className="game-ui__avatar" style={{backgroundPosition:`${sx}px -${sy}px`}} />
            <div className="gamie-ui__info">
                <p>Name: KilroggD</p>                
                <p>Class: {className}</p>
                <p>Health: 100/100</p>
            </div>
        </div>
    );
};

const mapStateToProps = ({character}) => ({heroClass: character.heroClass});

export default connect(mapStateToProps)(GameUI);
