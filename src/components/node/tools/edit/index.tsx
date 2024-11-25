import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const Edit = ({ nodeId }: { nodeId: number }) => {
  // api.user.tree.node.edit
  // params:  nodeId, treeName

  return (
    <IconButton>
      <EditOutlinedIcon />
    </IconButton>
  );
};
