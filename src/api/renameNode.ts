export const renameNode = (nodeId: number, newNodeName: string) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.rename?treeName={${
      import.meta.env.VITE_TREE_NAME
    }}&nodeId=${nodeId}&newNodeName=${newNodeName}`,
    { method: "POST" }
  );
