import { TREE_ID } from "../constants";

export const deleteNode = (nodeId: number) =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.node.delete?treeName={${TREE_ID}}&nodeId=${nodeId}`,
    { method: "POST" }
  );
