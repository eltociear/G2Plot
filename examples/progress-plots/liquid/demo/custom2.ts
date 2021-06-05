import { Liquid } from '@antv/g2plot';

const liquidPlot = new Liquid('container', {
  percent: 0.25,
  shape: 'rect',
  outline: {
    border: 2,
    distance: 4,
  },
  wave: {
    length: 128,
  },
  annotations: [
    { type: 'line', start: ['min', 0.5], end: ['max', 0.5] },
    { type: 'text', position: [0.5, 'median'], content: '测试', style: { textAlign: 'center' } },
  ],
});

liquidPlot.render();
// setInterval(() => { liquidPlot.changeData(Math.random() * 0.4) }, 500)
