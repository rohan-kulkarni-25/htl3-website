import React from 'react'

const Polygon = ({ points, fill, stroke, strokeWidth }) => {

    return (
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      );

}

export default Polygon