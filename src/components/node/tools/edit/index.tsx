import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { EditModal } from "./editModal";

export const Edit = ({ nodeId, name }: { nodeId: number; name: string }) => {
  // api.user.tree.node.edit
  // params:  nodeId, treeName

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenModal(true)}>
        <EditOutlinedIcon />
      </IconButton>
      <EditModal
        name={name}
        nodeId={nodeId}
        open={isOpenModal}
        setOpen={setIsOpenModal}
      />
    </>
  );
};
