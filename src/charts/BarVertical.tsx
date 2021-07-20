import * as d3 from 'd3';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

import { ChartContainer } from '../styles/charts/BarVertical';

interface IBarVerticalProps {}

export const BarVertical: React.FC<IBarVerticalProps> = props => {
  const id = nanoid();

  useEffect(() => createChart(id), [id]);
  return (
    <ChartContainer>
      <div id={id}></div>
    </ChartContainer>
  );
};

function createChart(id: string) {
  console.log('create chart!');

  d3.select(`#${id}`).append('svg');
  d3.select('svg').append('g');
}
