import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Delete = ({ nodeId }: { nodeId: number }) => {
  // api.user.tree.node.delete
  // params:  nodeId, treeName

  return (
    <IconButton>
      <DeleteForeverIcon sx={{ color: "red" }} />
    </IconButton>
  );
};
