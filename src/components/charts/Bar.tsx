import * as d3 from 'd3';
import { selectAll, transition } from 'd3';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Country } from '../../interfaces/Country';

import { ChartContainer } from '../../styles/charts/Bar';

interface IBarProps {
	width: number;
	height: number;
	data: Country[];
	id: string;
}

export const Bar: React.FC<IBarProps> = ({
	data,
	width,
	height,
	id,
}: IBarProps) => {
	const margins = { top: 42, right: 42, bottom: 42, left: 84 };
	// const countries = useRef(data);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function drawChart(id: string) {
		const div = d3.select(`#${id}`);

		const svg = div
			.append('svg')
			.attr('width', width)
			.attr('height', height);

		svg.append('g').attr('class', 'x-axis');
		svg.append('g').attr('class', 'y-axis');
		svg.append('g').attr('class', 'bars');
		svg.append('g').attr('class', 'flags');
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	function updateChart(id: string, data: Country[]) {
		console.log(data);

		const svg = d3.select(`#${id}`).select('svg');
		const gY = d3.select('g.y-axis');
		const gX = d3.select('g.x-axis');
		const gBars = d3.select('g.bars');
		const gFlags = d3.select('g.flags');

		const max = Math.max(...data.map(c => c.population));
		const min = Math.min(...data.map(c => c.population));

		const xScale = d3
			.scaleLinear()
			.domain([0, data.length])
			.range([margins.left, width - margins.right]);

		const yScale = d3
			.scaleLinear()
			.domain([max, 0])
			.range([margins.top, height - margins.bottom]);

		const xAxis = d3.axisBottom(xScale).ticks(3);
		const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

		gY.call(yAxis as any).attr('transform', `translate(${margins.left},0)`);

		gX.call(xAxis as any).attr(
			'transform',
			`translate(0,${height - margins.bottom})`
		);

		const barHeight = (d: Country) =>
			height - margins.top - yScale(d.population);

		const barPosY = (d: Country) => height - margins.top - barHeight(d);

		const bars = gBars.selectAll('rect').data(data);

		bars.exit().transition().attr('width', 0).attr('height', 0).remove();

		bars.enter()
			.append('rect')
			.attr('id', d => d.alpha3Code)
			.attr('class', 'bar')
			.attr('x', (_, i) => xScale(i))
			.attr('y', d => barPosY(d))
			.attr('fill', '#6670cc');

		bars.transition()
			.attr('x', (_, i) => xScale(i))
			.attr('y', d => barPosY(d))
			.attr('width', 20)
			.attr('height', d => barHeight(d))
			.attr('fill', '#6670cc');

		const flags = gFlags.selectAll('image').data(data);

		flags.exit().remove();

		flags
			.enter()
			.append('svg:image')
			.attr('xlink:href', d => d.flag) // src doesn't work
			.style('width', 40)
			// .style('height', 40)
			.attr('y', d => barPosY(d) - 12)
			.attr('x', (d, i) => xScale(i) + 6);

		flags
			.transition()
			.style('width', 40)
			.style('height', 40)
			.attr('y', d => barPosY(d) - 12)
			.attr('x', (d, i) => xScale(i) + 6);

		console.log({ max, data: data });
	}

	useEffect(() => {
		drawChart(id);
		updateChart(id, data);
	}, [height, width, id, data, drawChart, updateChart]);

	useEffect(() => {
		updateChart(id, data);
	}, [id, height, width, data, updateChart]);
	return (
		<ChartContainer style={{ width, height }}>
			<div id={id} style={{ width, height }}></div>
		</ChartContainer>
	);
};
