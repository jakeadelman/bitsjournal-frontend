import { AxisLeft, AxisBottom } from "@vx/axis";
import { appleStock } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import { AreaClosed } from "@vx/shape";
import { Group } from "@vx/group";

const data = appleStock;
const width = 750;
const height = 400;

const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
};

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = d => new Date(d.date);
const y = d => d.close;
// console.log(data);

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)]
});
console.log(yScale);
console.log(xScale);

const NewChart = () => (
  <svg width={width} height={height}>
    <Group top={margin.top} left={margin.left}>
      <AreaClosed
        data={data}
        xScale={xScale}
        yScale={yScale}
        x={x}
        y={y}
        fill={"blue"}
      />
    </Group>
  </svg>
);

// module.exports = { Chart };
export default NewChart;
