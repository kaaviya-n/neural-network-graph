import React, { useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";

import { inputNodes } from "./assets/inputNodes";
import { SideDrawer } from "./components/SideDrawer";

import "reactflow/dist/style.css";

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const NeuralGraph = () => {
  const [nodes, setNodes] = useNodesState(inputNodes);
  const [edges, setEdges] = useEdgesState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState({});

  useEffect(() => {
    if (inputNodes.length) {
      let newEdges = [];
      inputNodes.map((item) => {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          input?.map((_, index) => {
            return output?.map((outValue) => {
              return newEdges.push({
                id: `type-${index}`,
                source: item.id,
                target: outValue,
                type: "smoothstep",
                markerEnd: {
                  type: MarkerType.Arrow,
                },
                animated: false,
              });
            });
          });
        }
        return null;
      });
      setEdges(newEdges);
      console.log(newEdges);
    }
  }, [inputNodes]);

  const handleFromNodes = (id) => {
    let newNodes = nodes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          style: {
            ...item.style,
            border: "1px solid red",
          },
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setNodes(newNodes);
  };

  const handleToNodes = (output) => {
    let newNodes = nodes.map((item) => {
      console.log(output.filter((id) => id === item.id));
      if (output.filter((id) => id === item.id).length !== 0) {
        return {
          ...item,
          style: {
            ...item.style,
            border: "1px solid red",
          },
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setNodes(newNodes);
  };

  return (
    <div>
      {isOpen && (
        <SideDrawer
          isOpen
          currentNode={currentNode}
          onClick={() => setIsOpen(false)}
          fromCallback={handleFromNodes}
          toCallback={handleToNodes}
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
            onNodeClick={(ev, data) => {
              setIsOpen(true);
              setCurrentNode(data);
              setNodes(inputNodes);
            }}
          />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default NeuralGraph;
