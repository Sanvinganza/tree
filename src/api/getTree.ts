export const getTree = () =>
  fetch(
    `https://test.vmarmysh.com/api.user.tree.get?treeName={${
      import.meta.env.VITE_TREE_NAME
    }}`
  ).then((response) => response.json());
