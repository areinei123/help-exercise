import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ErrorSnackbar = () => {
  const [showError, setShowError] = useState(false);
  const lastError = useSelector(state => state.errorMessages[0] || '')

  useEffect(() => {
    if(lastError !== ''){
      setShowError(true)
    }
  }, [lastError])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={showError}
      autoHideDuration={2000}
      onClose={() => setShowError(false)}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{lastError.message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={() => setShowError(false)}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

export default ErrorSnackbar;
