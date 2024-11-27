import { TREE_ID } from "../constants";

export const renameNode = (nodeId: number, newNodeName: string) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.rename?treeName={${TREE_ID}}&nodeId=${nodeId}&newNodeName=${newNodeName}`,
    { method: "POST" }
  );
