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

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, [setCtx]);
    
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
