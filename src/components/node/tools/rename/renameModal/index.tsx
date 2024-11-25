import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { renameNode } from "../../../../../api/renameNode";

export type TEditModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeId: number;
  name: string;
};

export const RenameModal = ({ open, setOpen, nodeId }: TEditModalProps) => {
  const ref = useRef<HTMLInputElement | null>();

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation<
    any,
    Error,
    {
      newNodeName: string;
    }
  >(
    async ({ newNodeName }) => {
      return await renameNode(nodeId, newNodeName);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tree");
      },
    }
  );

  const handleRename = () => {
    mutation.mutate({
      newNodeName: ref.current?.value || "",
    });

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle>Rename</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Node name"
          type="text"
          fullWidth
          variant="standard"
          inputRef={ref}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          CANCEL
        </Button>
        <Button
          color="info"
          variant="contained"
          onClick={handleRename}
          autoFocus>
          RENAME
        </Button>
      </DialogActions>
    </Dialog>
  );
};
