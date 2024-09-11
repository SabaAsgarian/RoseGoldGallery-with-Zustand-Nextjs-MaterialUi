import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import WhiteTextField from './WhiteTextField'; // Adjust the import path
import StyledButton from './StyledButton'; // Adjust the import path

function SignInModal({ open, handleClose, setEmail, onSignInSuccess }) {
  const [localEmail, setLocalEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Save email and password to local storage (if needed)
    const userData = { email: localEmail, password }; // Create an object with email and password
    localStorage.setItem('userData', JSON.stringify(userData)); // Save to local storage

    // Call the success handler to enable the pay button
    onSignInSuccess();

    // Close the modal after sign-in
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...style, width: 400 }}>
        <h2>Sign In</h2>
        <WhiteTextField
          id="signInEmail"
          name="email"
          label="Email"
          value={localEmail}
          onChange={(e) => {
            setLocalEmail(e.target.value);
            setEmail(e.target.value);
          }}
        />
        <WhiteTextField
          id="signInPass"
          name="pass"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton variant="contained" onClick={handleSignIn}>Sign In</StyledButton>
      </Box>
    </Modal>
  );
}

export default SignInModal;