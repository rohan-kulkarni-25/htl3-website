import React from 'react'

const RoundedPolygon = ({ points, fill, stroke, strokeWidth, radius }) => {
    const createPathData = (points, radius) => {
        const pointArray = points.split(' ').map(p => p.split(',').map(Number));
        let pathData = '';
        for (let i = 0; i < pointArray.length; i++) {
          const [x1, y1] = pointArray[i];
          const [x2, y2] = pointArray[(i + 1) % pointArray.length];
          const [x3, y3] = pointArray[(i + 2) % pointArray.length];
          
          const angle = Math.atan2(y2 - y1, x2 - x1) - Math.atan2(y3 - y2, x3 - x2);
          const cornerRadius = Math.min(radius, Math.abs((x2 - x1) / 2), Math.abs((y2 - y1) / 2));
          
          if (i === 0) {
            pathData += `M${x1},${y1}`;
          }
    
          pathData += ` L${x2 - Math.cos(angle / 2) * cornerRadius},${y2 - Math.sin(angle / 2) * cornerRadius}`;
          pathData += ` A${cornerRadius},${cornerRadius} 0 0,1 ${x2 + Math.cos(angle / 2) * cornerRadius},${y2 + Math.sin(angle / 2) * cornerRadius}`;
        }
        pathData += ' Z';
        return pathData;
      };
    
      const pathData = createPathData(points, radius);
    
      return (
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path d={pathData} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      );
}

export default RoundedPolygon