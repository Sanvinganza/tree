import { TREE_ID } from "../constants";

export const createNode = (parentNodeId: number, nodeName: string) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.create?treeName={${TREE_ID}}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`,
    { method: "POST" }
  );
