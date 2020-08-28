import React, {useCallback, useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';

import CanvasContext from './canvasContext';
import {MAP_DIMENSIONS, TILE_SIZE, MOVE_DIRECTIONS} from './constants';
import {move} from './slices/characterSlice'
import {checkMapCollision} from './utils';

const mapDispatch = {move};
const mapStateToProps = ({character}) => ({character});

const GameLoop = ({children, character, move}) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const loopRef = useRef();
    const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
    const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;

    const moveCharacter = useCallback((e) => {
        const key = e.key;
        if (MOVE_DIRECTIONS[key]) {
            const [x,y] = MOVE_DIRECTIONS[key];
            if (!checkMapCollision(character.x + x, character.y + y)) { 
                move([x, y]);
            }
        }
    }, [move, character.x, character.y]);

    const tick = useCallback(() => {
        const canvas = canvasRef.current;
        ctx && ctx.clearRect(0, 0, width, height);
        setCtx(null);
        setCtx(canvas.getContext('2d'));            
        loopRef.current = requestAnimationFrame(tick);
    }, [ctx, setCtx, height, width]);

    useEffect(() => {      
        document.addEventListener('keypress', moveCharacter);
        loopRef.current = requestAnimationFrame(tick);
        return () => {
            loopRef.current && cancelAnimationFrame(loopRef.current);
            document.removeEventListener('keypress', moveCharacter);
        }
    }, [loopRef, tick, moveCharacter])
    
    return (
        <CanvasContext.Provider value={ctx}>
            <canvas
                ref={canvasRef} 
                width={width} 
                height={height}
            />
            {ctx && children}
        </CanvasContext.Provider>
    );
};

export default connect(mapStateToProps, mapDispatch)(GameLoop);
