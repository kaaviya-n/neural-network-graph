import { ConvolutionNode } from "../components/convolutionNode";

export const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "input",
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="16" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["1"],
        output: ["2"],
      },
    },
  },
  {
    id: "2",
    position: { x: 40, y: 150 },
    data: {
      label: "Relu",
      parameters: {
        kernel_size: 3,
        type: "relu",
        input: ["1"],
        output: ["3", "4"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#4b1b16",
      color: "#ffffff",
    },
  },
  {
    id: "3",
    position: { x: -100, y: 250 },
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="64" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["2"],
        output: ["5"],
      },
    },
  },
  {
    id: "4",
    position: { x: 100, y: 250 },
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="64" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["2"],
        output: ["6"],
      },
    },
  },
  {
    id: "5",
    position: { x: -60, y: 350 },
    data: {
      label: "Relu",
      parameters: {
        kernel_size: 3,
        type: "relu",
        input: ["3"],
        output: ["7"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#4b1b16",
      color: "#ffffff",
    },
  },
  {
    id: "6",
    position: { x: 140, y: 350 },
    data: {
      label: "Relu",
      parameters: {
        kernel_size: 3,
        type: "relu",
        input: ["4"],
        output: ["7"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#4b1b16",
      color: "#ffffff",
    },
  },
  {
    id: "7",
    position: { x: 40, y: 500 },
    data: {
      label: "Concat",
      parameters: {
        kernel_size: 3,
        type: "concat",
        input: ["5", "6"],
        output: ["8"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#58423B",
      color: "#ffffff",
    },
  },
  {
    id: "8",
    position: { x: 40, y: 600 },
    data: {
      label: "MaxPool",
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "maxpool",
        input: ["7"],
        output: ["9"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#335532",
      color: "#ffffff",
    },
  },
  {
    id: "9",
    position: { x: 0, y: 700 },
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="64" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["8"],
        output: ["10"],
      },
    },
  },
  {
    id: "10",
    position: { x: 40, y: 800 },
    data: {
      label: "Relu",
      parameters: {
        kernel_size: 3,
        type: "relu",
        input: ["9"],
        output: ["11", "12"],
      },
    },
    style: {
      width: 70,
      height: 36,
      backgroundColor: "#4b1b16",
      color: "#ffffff",
    },
  },
  {
    id: "11",
    position: { x: -100, y: 950 },
    type: "output",
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="64" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["10"],
      },
    },
  },
  {
    id: "12",
    position: { x: 100, y: 950 },
    type: "output",
    style: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    data: {
      label: <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="64" />,
      parameters: {
        kernel_size: "3, 3",
        pads: "0,0,0,0",
        strides: "1,1",
        type: "Conv",
        input: ["10"],
      },
    },
  },
];
