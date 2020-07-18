import React from 'react';
import { connect } from 'react-redux';

import {MAP_TILE_IMAGES} from './constants';
import {bufferImage} from './slices/mapImagesSlice';

const mapDispatch = { bufferImage };

const ImagesBuffer = ({ bufferImage }) => {
    return (
        <div className="images-buffer">
        {
            Object.keys(MAP_TILE_IMAGES).map(key => {
                return (
                    <img
                        key={`map-tile-img-${key}`} 
                        id={`map-tile-img-${key}`} 
                        src={`${MAP_TILE_IMAGES[key]}`}
                        alt={`map-tile-${key}`}
                        onLoad={() => { bufferImage(MAP_TILE_IMAGES[key]); }}
                    />
                );
            })
        }
        </div>
    )
}

export default connect(null, mapDispatch)(ImagesBuffer);
