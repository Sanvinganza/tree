import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useRef } from "react";

export type TAddModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeId: number;
};

export const AddModal = ({ open, setOpen, nodeId }: TAddModalProps) => {
  // api.user.tree.node.create
  // params: parentNodeId, nodeId, treeName

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
      <DialogTitle>Add</DialogTitle>
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
          ADD
        </Button>
      </DialogActions>
    </Dialog>
  );
};
