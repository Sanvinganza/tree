import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export type TDeleteModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeId: number;
  name: string;
};

export const DeleteModal = ({
  open,
  setOpen,
  nodeId,
  name,
}: TDeleteModalProps) => {
  // api.user.tree.node.delete
  // params: nodeId, treeName

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>Do you want to delete {name}?</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          CANCEL
        </Button>
        <Button color="error" variant="contained" onClick={handleAdd} autoFocus>
          DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
};
