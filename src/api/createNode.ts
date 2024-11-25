export const createNode = (parentNodeId: number, nodeName: string) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.create?treeName={${
      import.meta.env.VITE_TREE_NAME
    }}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`,
    { method: "POST" }
  );
