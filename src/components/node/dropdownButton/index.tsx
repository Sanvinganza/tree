import { IconButton } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

type TDropdownButtonProps = {
  setIsShowChildes: (isShowChildes: boolean) => void;
  isShowChildes: boolean;
  childrenLength: number;
};

export const DropdownButton = ({
  setIsShowChildes,
  isShowChildes,
  childrenLength,
}: TDropdownButtonProps) => {
  return (
    <IconButton
      sx={{ width: "1em", height: "1em" }}
      onClick={() => setIsShowChildes(!isShowChildes)}>
      {childrenLength ? (
        isShowChildes ? (
          <KeyboardArrowDownOutlinedIcon />
        ) : (
          <KeyboardArrowRightOutlinedIcon />
        )
      ) : null}
    </IconButton>
  );
};
