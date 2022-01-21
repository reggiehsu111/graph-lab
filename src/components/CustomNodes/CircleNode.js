import React, { memo } from 'react';

const CircleNode = ({data}) => {
    return (
      <div
        style={{
            border: '3px solid',
            borderRadius: "50%",
            borderColor: data.color,
            height: data.size.toString()+"px",
            width: data.size.toString()+"px",
        }}
      >
          <div
          style ={{
            position: "relative",
            top: "50%",
            textAlign: "center",
            lineHeight: "0px",
            color: data.color,
          }}>{data.label}</div>
      </div>

    );
};

export default CircleNode;