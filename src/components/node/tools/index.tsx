import { Box } from "@mui/material";
import { Add } from "./add";
import { Delete } from "./delete";
import { Edit } from "./edit";

type TToolsProps = { nodeId: number; isSelected: boolean; name: string };

export const Tools = ({ nodeId, isSelected, name }: TToolsProps) => {
  return isSelected ? (
    <Box>
      <Add nodeId={nodeId} />
      <Edit nodeId={nodeId} name={name} />
      <Delete nodeId={nodeId} name={name} />
    </Box>
  ) : null;
};
