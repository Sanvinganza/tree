import { useEffect, useState } from "react";

export const Root = () => {
  const [treeData, setTreeData] = useState(data);

  useEffect(() => {}, []);

  const handleEdit = (id, newValue) => {
    const updateNode = (nodes) => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, value: newValue };
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    };

    setTreeData(updateNode(treeData));
  };

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};
