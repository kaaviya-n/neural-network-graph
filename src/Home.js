import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  MiniMap,
} from "reactflow";

import { initialNodes } from "./assets/initialNodes";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";
import { AddNode } from "./components/AddNode/AddNode";
import { ConvolutionNode } from "./components/ConvolutionNode/ConvolutionNode";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { uniqueEdges, updateNodeStyle } from "./util";

import "reactflow/dist/style.css";

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const NeuralGraph = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultEdges = () => {
    if (initialNodes.length) {
      let newEdges = [];
      initialNodes.map((item) => {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          return output?.map((outValue) => {
            return newEdges.push({
              id: `${item.id}-${outValue}`,
              source: item.id,
              target: outValue,
              type: "smoothstep",
            });
          });
        }
        return uniqueEdges(newEdges);
      });
      setEdges(newEdges);
    }
  };

  useEffect(() => {
    defaultEdges();
  }, []);

  const handleFromNodes = (id) => {
    let newEdges = [];
    let newNodes = nodes.map((item) => {
      if (item.id === id) {
        return updateNodeStyle(item);
      } else {
        return {
          ...item,
        };
      }
    });
    nodes.map((item) => {
      if (item.id === id) {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          return output?.map((outValue) => {
            return newEdges.push({
              id: `${item.id}-${outValue}`,
              label: `id : ${item.id}-${outValue}`,
              labelStyle: {
                fontSize: 11,
              },
              source: item.id,
              target: outValue,
              type: "smoothstep",
              animated: true,
            });
          });
        }
      } else {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          return output?.map((outValue) => {
            return newEdges.push({
              id: `${item.id}-${outValue}`,
              source: item.id,
              target: outValue,
              type: "smoothstep",
              animated: false,
            });
          });
        }
      }
      return null;
    });
    setEdges(uniqueEdges(newEdges));
    setNodes(newNodes);
  };

  const handleToNodes = (output) => {
    let newNodes = nodes.map((item) => {
      if (output.filter((id) => id === item.id).length !== 0) {
        return updateNodeStyle(item);
      } else {
        return {
          ...item,
        };
      }
    });
    setNodes(newNodes);
  };

  const handleNodeDelete = useCallback(
    (deleted) => {
      var updatedNode = nodes.filter((node) => {
        return node.id !== deleted;
      });
      setNodes(updatedNode);
      setIsOpen(false);
    },
    [nodes, edges]
  );

  const handleAddNode = useCallback(
    (operatorType) => {
      let position = nodes[nodes.length - 1].position.y + 100;
      setNodes((els) => {
        return [
          ...els,
          {
            id: (nodes.length + 1).toString(),
            position: { x: 0, y: position },
            style:
              operatorType === "conv"
                ? {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }
                : {
                    width: 70,
                    height: 36,
                    backgroundColor: "#4b1b16",
                    color: "#ffffff",
                  },
            data: {
              label:
                operatorType === "conv" ? (
                  <ConvolutionNode valueW="16 x 128 x 1 x 1" valueB="16" />
                ) : (
                  <Tooltip text="Relu">Relu</Tooltip>
                ),
              parameters: {
                kernel_size: "3, 3",
                pads: "0,0,0,0",
                strides: "1,1",
                type: operatorType,
              },
            },
          },
        ];
      });
    },
    [nodes]
  );

  return (
    <div>
      {isOpen && (
        <SideDrawer
          isOpen
          currentNode={currentNode}
          onClose={() => {
            setIsOpen(false);
            setNodes(initialNodes);
            defaultEdges();
          }}
          fromCallback={handleFromNodes}
          toCallback={handleToNodes}
          onDelete={handleNodeDelete}
        />
      )}
      <ReactFlowProvider>
        <div style={{ width: "90%", height: "100vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
            snapToGrid={true}
            onNodeClick={(_, data) => {
              setIsOpen(true);
              setCurrentNode(data);
              defaultEdges();
            }}
          />
          <Controls>
            <button onClick={() => setIsModalOpen(true)}>
              <div>Add Node</div>
            </button>
            <button onClick={() => setNodes(initialNodes)}>
              <div>Reset</div>
            </button>
          </Controls>
          <MiniMap zoomable pannable />
        </div>
      </ReactFlowProvider>
      <AddNode
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddNode}
      />
    </div>
  );
};

export default NeuralGraph;
