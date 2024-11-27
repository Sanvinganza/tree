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
import { createNode } from "../../../../../api/createNode";

export type TAddModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  nodeId: number;
};

export type TResponseError = {
  id: string;
  type: "Secure";
  data: {
    message: string;
  };
};

export const AddModal = ({ open, setOpen, nodeId }: TAddModalProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation<
    any,
    Error,
    {
      nodeName: string;
    }
  >(
    async ({ nodeName }) => {
      return await createNode(nodeId, nodeName);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tree");
      },
    }
  );

  const handleAdd = () => {
    mutation.mutate(
      {
        nodeName: ref.current?.value || "",
      },
      {
        onSuccess: (data) => {
          if (data.status === 500) {
            data.json().then((res: TResponseError) => alert(res.data.message));
          } else {
            setOpen(false);
          }
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle>Add</DialogTitle>

      <DialogContent>
        {mutation.isLoading ? (
          <p>Loading...</p>
        ) : (
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
        )}
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
