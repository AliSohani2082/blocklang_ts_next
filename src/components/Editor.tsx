import React from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import ConditionSetting from "./ConditionControle";

const Editor = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack>
        <Box>
          <Typography>Condition</Typography>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Condition_Controle"
            aria-describedby="this is the pannel for setting the condition"
          >
            <ConditionSetting />
          </Modal>
        </Box>
      </Stack>
    </Box>
  );
};

export default Editor;

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
