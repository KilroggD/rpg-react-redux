import React from 'react';
import { connect } from 'react-redux';

import Grid from './Grid';
import ImagesBuffer from './ImagesBuffer';
import Map from './Map';
import Character from './Character';
import {MAP_DIMENSIONS, TILE_SIZE, MAP_TILE_IMAGES} from './constants';

const TileView = ({mapImagesLoaded, gameStatus}) => {
    const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
    const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;
 
    return (
        <>
            <ImagesBuffer />
            {Object.keys(mapImagesLoaded).length === Object.keys(MAP_TILE_IMAGES).length &&
                <>
                    <Grid width={width} height={height}>
                        <Map />                
                    </Grid>
                </>
            }
            {gameStatus.mapLoaded && <Character />}
        </>
    );
};

const mapStateToProps = ({mapImagesLoaded, gameStatus}) => ({mapImagesLoaded, gameStatus});

export default connect(mapStateToProps)(TileView);
