import React from "react";
import { Box, ButtonBase, Modal } from "@mui/material";

const TriggerTag = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <ButtonBase></ButtonBase>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Trigger Tag"
        aria-describedby="this is a Trigger"
      ></Modal>
    </Box>
  );
};

export default TriggerTag;
