import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteModal } from "./deleteModal";
import { useState } from "react";

export const Delete = ({ nodeId, name }: { nodeId: number; name: string }) => {
  // api.user.tree.node.delete
  // params:  nodeId, treeName

  const [isOpenModal, setIsOpenModal] = useState(false);

  return name !== "Root" ? (
    <>
      <IconButton onClick={() => setIsOpenModal(true)}>
        <DeleteForeverIcon sx={{ color: "red" }} />
      </IconButton>
      <DeleteModal
        name={name}
        nodeId={nodeId}
        open={isOpenModal}
        setOpen={setIsOpenModal}
      />
    </>
  ) : null;
};
