import { IconButton } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

type TDropdownButtonProps = {
  setIsShowChild: (isShowChild: boolean) => void;
  isShowChild: boolean;
  childrenLength: number;
};

export const DropdownButton = ({
  setIsShowChild,
  isShowChild,
  childrenLength,
}: TDropdownButtonProps) => {
  return (
    <IconButton
      sx={{ width: "1em", height: "1em" }}
      onClick={() => setIsShowChild(!isShowChild)}>
      {childrenLength ? (
        isShowChild ? (
          <KeyboardArrowDownOutlinedIcon />
        ) : (
          <KeyboardArrowRightOutlinedIcon />
        )
      ) : null}
    </IconButton>
  );
};
