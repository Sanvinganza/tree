import { Box, Typography } from "@mui/material";

import { CSSProperties, memo, useState } from "react";
import { Tools } from "./tools";
import { DropdownButton } from "./dropdownButton";

export type TNode = {
  id: number;
  name: string;
  children: TNode[];
};

type TNodeProps = TNode & {
  setIsSelectedNodeId: (isSelectedNodeId: number) => void;
  isSelectedNodeId: number;
};

export const Node = memo(
  ({
    id,
    name,
    children,
    isSelectedNodeId,
    setIsSelectedNodeId,
  }: TNodeProps) => {
    const [isShowChild, setIsShowChild] = useState(false);

    const container: CSSProperties = {
      marginLeft: "1em",
    };

    const main: CSSProperties = {
      display: "flex",
      alignItems: "center",
      backgroundColor: isSelectedNodeId === id ? "#eeeff8" : "transparent",
    };

    return (
      <Box sx={container}>
        <Box
          sx={main}
          onClick={() => {
            if (isSelectedNodeId !== id) {
              setIsSelectedNodeId(id);
            }
          }}>
          <DropdownButton
            setIsShowChild={setIsShowChild}
            isShowChild={isShowChild}
            childrenLength={children.length}
          />
          <Typography sx={{ padding: "8px 0" }}>{name}</Typography>
          <Tools nodeId={id} isSelected={isSelectedNodeId === id} name={name} />
        </Box>

        <Box>
          {isShowChild
            ? children.map(({ id, name, children }: TNode) => (
                <Node
                  key={id}
                  children={children}
                  id={id}
                  name={name}
                  isSelectedNodeId={isSelectedNodeId}
                  setIsSelectedNodeId={setIsSelectedNodeId}
                />
              ))
            : null}
        </Box>
      </Box>
    );
  }
);
