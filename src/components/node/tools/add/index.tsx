import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Add = ({ nodeId }: { nodeId: number }) => {
  // api.user.tree.node.create
  // params: parentNodeId, nodeId, treeName

  return (
    <IconButton>
      <AddIcon />
    </IconButton>
  );
};
