import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useMutation, useQueryClient } from "react-query";
import { deleteNode } from "../../../../../api/deleteNode";
import { TResponseError } from "../../add/addModal";

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
  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error, null>(() => deleteNode(nodeId), {
    onSuccess: () => {
      queryClient.invalidateQueries("tree");
    },
  });

  const handleDelete = () => {
    mutation.mutate(null, {
      onSuccess: (data) => {
        if (data.status === 500) {
          data.json().then((res: TResponseError) => alert(res.data.message));
          setOpen(false);
        }
      },
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        {mutation.isLoading ? (
          <p>Loading...</p>
        ) : (
          `Do you want to delete ${name}?`
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          CANCEL
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={handleDelete}
          autoFocus>
          DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
};
