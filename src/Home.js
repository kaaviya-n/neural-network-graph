import React, { useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  MiniMap,
} from "reactflow";

import { initialNodes } from "./assets/initialNodes";
import { SideDrawer } from "./components/SideDrawer";
import { uniqueEdges, updateNodeStyle } from "./util";

import "reactflow/dist/style.css";

const defaultViewport = { x: 0, y: 0, zoom: 2.5 };

const NeuralGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState({});

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
        />
      )}
      <ReactFlowProvider>
        <div style={{ width: "90%", height: "100vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
            snapToGrid={true}
            onNodeClick={(_, data) => {
              setIsOpen(true);
              setCurrentNode(data);
              setNodes(initialNodes);
              defaultEdges();
            }}
          />
          <Controls showInteractive={false} />
          <MiniMap zoomable pannable />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default NeuralGraph;
