import { Box } from "@mui/material";
import { Add } from "./add";
import { Delete } from "./delete";
import { Edit } from "./edit";

type TToolsProps = { nodeId: number; isSelected: boolean };

export const Tools = ({ nodeId, isSelected }: TToolsProps) => {
  // /api.user.tree.node.delete params: treeName, nodeId

  return isSelected ? (
    <Box>
      <Add nodeId={nodeId} />
      <Edit nodeId={nodeId} />
      <Delete nodeId={nodeId} />
    </Box>
  ) : null;
};
