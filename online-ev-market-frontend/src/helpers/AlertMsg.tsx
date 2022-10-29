import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Alert, AlertTitle, Box } from '@mui/material';

type AlertMessageProps = {
  title: string;
  contentText: string;
  status: number;
};

type AlertMsgProps = {
  msg: AlertMessageProps;
  open: boolean;
  onClick: () => void;
};

const AlertMsg: React.FC<AlertMsgProps> = ({ msg, open, onClick }) => (
  <Dialog
    open={open}
    maxWidth="md"
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <Alert severity={msg.status === 200 ? 'success' : 'error'} sx={{ p: 3 }}>
      <AlertTitle sx={{ mb: 2 }}>{msg.title}</AlertTitle>
      <Box sx={{ mb: 4 }}>{msg.contentText}</Box>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          variant="outlined"
          onClick={onClick}
          autoFocus
          color={msg.status === 200 ? 'success' : 'error'}
        >
          Close
        </Button>
      </Box>
    </Alert>
  </Dialog>
);

export default AlertMsg;
