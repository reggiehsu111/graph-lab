import React, { useState, useEffect, useCallback } from 'react';
import Graph from "react-graph-vis";
import { GraphLayout } from '@/GraphLayout';

const options = {
    nodes: {
      shape: 'circle',
      borderWidth: 0,
      color: '#ff0000',
      font: {
        color: '#fff',
        size: 15,
        align: 'center'
      },
    },
    edges: {
      color: "#000000",
      arrows: {
        to: {
          enabled: false,
        },
      },
    },
  };

const CustomGraph = () => {
  return (
      <div className="Graph">
        <Graph
          graph={GraphLayout}
          options={options}
          style={{
            height: "100vh"
          }}
        />
      </div>
  );
};

export default CustomGraph;