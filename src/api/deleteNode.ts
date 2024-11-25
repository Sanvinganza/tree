export const deleteNode = (nodeId: number) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.delete?treeName={${
      import.meta.env.VITE_TREE_NAME
    }}&nodeId=${nodeId}`,
    { method: "POST" }
  );
