import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useRef } from "react";

export type TEditModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeId: number;
  name: string;
};

export const EditModal = ({ open, setOpen, nodeId, name }: TEditModalProps) => {
  // api.user.tree.node.edit
  // params: nodeId, treeName, newNodeName

  const ref = useRef<HTMLInputElement | null>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log(ref.current?.value);

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
        <Button color="info" variant="contained" onClick={handleAdd} autoFocus>
          RENAME
        </Button>
      </DialogActions>
    </Dialog>
  );
};
