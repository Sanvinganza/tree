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
  setSelectedNodeId: (selectedNodeId: number) => void;
  selectedNodeId: number;
};

export const Node = memo(
  ({ id, name, children, selectedNodeId, setSelectedNodeId }: TNodeProps) => {
    const [isShowChildes, setIsShowChildes] = useState<boolean>(false);

    const container: CSSProperties = {
      marginLeft: "1em",
    };

    const main: CSSProperties = {
      display: "flex",
      alignItems: "center",
      backgroundColor: selectedNodeId === id ? "#eeeff8" : "transparent",
    };

    const text: CSSProperties = { padding: "8px 0" };

    const handleClickOnNode = () => {
      if (selectedNodeId !== id) {
        setSelectedNodeId(id);
      }
    };

    return (
      <Box sx={container}>
        <Box sx={main} onClick={handleClickOnNode}>
          <DropdownButton
            setIsShowChildes={setIsShowChildes}
            isShowChildes={isShowChildes}
            childrenLength={children.length}
          />
          <Typography sx={text}>{name}</Typography>
          <Tools nodeId={id} isSelected={selectedNodeId === id} name={name} />
        </Box>

        <Box>
          {isShowChildes
            ? children.map(({ id, name, children }: TNode) => (
                <Node
                  key={id}
                  children={children}
                  id={id}
                  name={name}
                  selectedNodeId={selectedNodeId}
                  setSelectedNodeId={setSelectedNodeId}
                />
              ))
            : null}
        </Box>
      </Box>
    );
  }
);
