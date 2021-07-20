import * as d3 from 'd3';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
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
  const margins = { top: 42, right: 42, bottom: 42, left: 64 };
  const id = nanoid();
  let countries = useRef(data);

  useEffect(() => {
    function drawChart(id: string) {}
    function updateChart(id: string) {
      try {
        const div = d3.select(`#${id}`);
        const svg = div
          .append('svg')
          .attr('width', width)
          .attr('height', height);
        const gY = svg.append('g');
        const gX = svg.append('g');
        const gBars = svg.append('g');

        const max = Math.max(...countries.current.map(c => c.population));
        const min = Math.min(...countries.current.map(c => c.population));

        const xScale = d3
          .scaleLinear()
          .domain([0, data.length])
          .range([margins.left, width - margins.right]);

        const yScale = d3
          .scaleLinear()
          .domain([max, 0])
          .range([margins.bottom, height - (margins.top + margins.bottom)]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        // .tickSizeOuter(0);

        gY.call(yAxis).attr('transform', `translate(${margins.left},0)`);

        gX.call(xAxis).attr(
          'transform',
          `translate(0,${height - margins.bottom})`
        );

        const bars = gBars.selectAll('rect').data(data);

        bars
          .enter()
          .append('rect')
          .attr('x', (_, i) => xScale(i))
          .attr('y', d => height - yScale(d.population) - margins.bottom)
          .attr('width', 20)
          .attr('height', d => yScale(d.population))
          .attr('fill', '#6670cc');

        console.log({ max, min, data: countries.current });
      } finally {
        return;
      }
    }

    updateChart(id);
  }, [
    data,
    height,
    id,
    margins.bottom,
    margins.left,
    margins.right,
    margins.top,
    width,
  ]);
  return (
    <ChartContainer style={{ width, height }}>
      <div id={id} style={{ width, height }}></div>
    </ChartContainer>
  );
};
