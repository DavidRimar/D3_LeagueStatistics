type Handler = (...args: any[]) => any;
type ChartHandlerBase = { [x: string]: Handler };

interface ChartHandlers extends ChartHandlerBase {
  handleClick?: Handler;
  handleMouseOver?: Handler;
  handleMouseOut?: Handler;
  handleMouseMove?: Handler;
  handleChange?: Handler;
}

interface CustomObj {
  containerDomId: string;
  stackKeys: string[];
  customLabels: string[];
  customColors: string[];
}
