const COLOR = "#ff0022";
const SIZE = 50;
const Elements = [ 
      {
        id: '1',
        type: 'circleNode',
        data: { id: 1, label: '1', color: COLOR, size: SIZE},
        position: { x: 300, y: 50 },
      },
      {
        id: '2',
        type: 'circleNode',
        data: { id: 2, label: '2', color: COLOR, size: SIZE},
        position: { x: 200, y: 50 },
      },
      {
        id: 'edges-e1-2',
        source: '1',
        target: '2',
        style: { stroke: '#000' },
      }];
module.exports = {
    Elements,
}