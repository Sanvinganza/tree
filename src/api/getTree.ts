import { TREE_ID } from "../constants";

export const getTree = () =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.get?treeName={${TREE_ID}}`
  ).then((response) => response.json());
