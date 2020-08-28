import React, {useEffect, useContext, useRef} from 'react';
import {connect} from 'react-redux';

import CanvasConext from './canvasContext';
import {HEROES_SPRITE, HERO_IMAGE_SIZE, HERO_CLASSES_MAP} from '../constants';
import {TILE_SIZE} from './constants';
import {bufferImage} from './slices/characterSlice';
import {loadCharacter} from './slices/statusSlice';

const Character = ({x, y, heroClass, heroImg, loadCharacter, bufferImage}) => {
    const ctx = useContext(CanvasConext);
    const imgRef = useRef(null);

    useEffect(() => {
        if (heroImg) {
            const {sx, sy} = HERO_CLASSES_MAP[heroClass].icon;
            ctx.drawImage(
                document.querySelector(heroImg),
                sx,
                sy,
                HERO_IMAGE_SIZE - 5,
                HERO_IMAGE_SIZE - 5,
                x * TILE_SIZE,
                y * TILE_SIZE,
                HERO_IMAGE_SIZE,
                HERO_IMAGE_SIZE,
            );
            loadCharacter(true);
        };  
    }, [ctx, heroClass, heroImg, x, y, loadCharacter]);

    return (
        <img
            id="character" 
            alt="character"
            ref={imgRef} 
            onLoad={
                () => bufferImage(`#${imgRef.current.id}`)
            }
            className="images-buffer"
            src={HEROES_SPRITE}
        />
    );
};

const mapStateToProps = (state) => ({...state.character});

const mapDispatch = {loadCharacter, bufferImage};

export default connect(mapStateToProps, mapDispatch)(Character);
