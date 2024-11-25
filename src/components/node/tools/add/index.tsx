import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import { AddModal } from "./addModal";

export const Add = ({ nodeId }: { nodeId: number }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenModal(true)}>
        <AddIcon />
      </IconButton>
      <AddModal open={isOpenModal} setOpen={setIsOpenModal} nodeId={nodeId} />
    </>
  );
};
