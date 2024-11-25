import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { RenameModal } from "./renameModal";

export const Rename = ({ nodeId, name }: { nodeId: number; name: string }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenModal(true)}>
        <EditOutlinedIcon />
      </IconButton>
      <RenameModal
        name={name}
        nodeId={nodeId}
        open={isOpenModal}
        setOpen={setIsOpenModal}
      />
    </>
  );
};
