import { Box } from "@mui/material";
import { Add } from "./add";
import { Delete } from "./delete";
import { Rename } from "./rename";

type TToolsProps = { nodeId: number; isSelected: boolean; name: string };

export const Tools = ({ nodeId, isSelected, name }: TToolsProps) => {
  return isSelected ? (
    <Box>
      <Add nodeId={nodeId} />
      <Rename nodeId={nodeId} name={name} />
      <Delete nodeId={nodeId} name={name} />
    </Box>
  ) : null;
};
