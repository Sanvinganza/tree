import { Box, Typography } from "@mui/material";

import { CSSProperties, memo, useState } from "react";
import { Tools } from "./tools";
import { DropdownButton } from "./dropdownButton";

export type TNode = {
  id: number;
  name: string;
  children: TNode[];
};

type TNodeProps = TNode & { isSelected: boolean; marginLeft: number };

export const Node = memo(
  ({ id, name, children, isSelected = false, marginLeft }: TNodeProps) => {
    marginLeft = marginLeft + 1;

    const [isShowChild, setIsShowChild] = useState(false);

    const container: CSSProperties = {
      marginLeft: marginLeft + "em",
    };

    const main: CSSProperties = {
      display: "flex",
      alignItems: "center",
    };

    return (
      <Box sx={container}>
        <Box sx={main}>
          <DropdownButton
            setIsShowChild={setIsShowChild}
            isShowChild={isShowChild}
            childrenLength={children.length}
          />
          <Typography>{name}</Typography>
          <Tools nodeId={id} isSelected={isSelected} />
        </Box>

        <Box>
          {isShowChild
            ? children.map(({ id, name, children }: TNode) => (
                <Node
                  children={children}
                  id={id}
                  name={name}
                  isSelected={true}
                  marginLeft={marginLeft}
                />
              ))
            : null}
        </Box>
      </Box>
    );
  }
);
