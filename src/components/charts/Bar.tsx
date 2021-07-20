import * as d3 from 'd3';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Country } from '../../interfaces/Country';

import { ChartContainer } from '../../styles/charts/Bar';

interface IBarProps {
  width: number;
  height: number;
  data: Country[];
}

export const Bar: React.FC<IBarProps> = ({
  data,
  width,
  height,
}: IBarProps) => {
  const margins = { top: 24, right: 24, bottom: 24, left: 24 };
  const id = nanoid();

  useEffect(() => {
    function updateChart(id: string) {
      console.log('create chart!');

      d3.select(`#${id}`).append('svg');
      d3.select('svg').append('g');

      const max = Math.max(...data.map(c => c.population));
      const min = Math.min(...data.map(c => c.population));

      const yScale = d3
        .scaleLinear()
        .domain([0, max])
        .range([margins.bottom, height - margins.top]);

      const yAxis = d3.axisLeft(yScale);
    }

    updateChart(id);
  }, [id, width, height, data, margins.top, margins.bottom]);
  return (
    <ChartContainer style={{ width, height }}>
      <div id={id} style={{ width, height }}></div>
    </ChartContainer>
  );
};
