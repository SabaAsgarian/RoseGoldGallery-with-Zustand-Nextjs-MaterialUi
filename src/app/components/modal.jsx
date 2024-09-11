"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, FormControl, InputAdornment, Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

// Define styled components
const WhiteTextField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '4px',
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  border:'1px solid black',
  '&:hover': {
    backgroundColor: 'black',
    color:'white'
  },
});

// New modal for sign-up
function SignUpModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    img: '', fname: '', lname: '', street: '', status: '', user: '', age: '', pass: '', city: '', email: '', mobile: ''
  });

  // Add state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignInFields, setShowSignInFields] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const url = 'https://66b9e0c8fa763ff550f9f4a9.mockapi.io/admin';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          alert('New user added!');
          setFormData({ img: '', fname: '', lname: '', street: '', status: '', user: '', age: '', pass: '', city: '', email: '', mobile: '' });
          handleClose(); // Close sign-up modal after submission
        } else {
          throw new Error('Failed to add user');
        }
      })
      .catch(error => {
        alert('New user not added: ' + error.message);
      });
  };

  // Function to handle sign-in
  const para = () => {
    const url = new URL('https://66b9e0c8fa763ff550f9f4a9.mockapi.io/admin');
    url.searchParams.append('email', email);
    url.searchParams.append('pass', password);
    

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then(tasks => {
        console.log(tasks);
        // Assuming you have setStatus and setData defined
      
        setData(tasks);
        // Redirect to account page
        // Use Link from 'next/link' to navigate
      })
      .catch(error => {
        // handle error
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...style, width: '80%', height: '80%' }}>
        <h2>Sign Up</h2>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <FormControl variant="standard">
            <WhiteTextField
              id="img"
              name="img"
              label="Image"
              value={formData.img}
              onChange={handleInputChange}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <WhiteTextField
            id="fname"
            name="fname"
            label="First Name"
            value={formData.fname}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="lname"
            name="lname"
            label="Last Name"
            value={formData.lname}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="street"
            name="street"
            label="Street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="status"
            name="status"
            label="Status"
            value={formData.status}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="user"
            name="user"
            label="User"
            value={formData.user}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="age"
            name="age"
            label="Age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="pass"
            name="pass"
            label="Password"
            value={formData.pass}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="city"
            name="city"
            label="City"
            value={formData.city}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <WhiteTextField
            id="mobile"
            name="mobile"
            label="Mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />

          {/* Add other WhiteTextField components for fname, lname, etc. */}
          <StyledButton variant="contained" onClick={handleSubmit}>Submit</StyledButton>

          {/* Conditionally render sign-in fields */}
          {showSignInFields && (
            <>
              <WhiteTextField
                id="signInEmail" // Changed from "email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <WhiteTextField
                id="signInPass" // Changed from "pass"
                name="pass"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <StyledButton variant="contained" onClick={para}>Sign In</StyledButton>
            </>
          )}

        </Box>
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// Define SignInModal component
function SignInModal({ open, handleClose, setEmail, onSignInSuccess }) {
  const [localEmail, setLocalEmail] = useState(''); // Rename to avoid conflict
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
    // Save email and password to local storage
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
          value={localEmail} // Use localEmail instead
          onChange={(e) => {
            setLocalEmail(e.target.value); // Update localEmail state
            setEmail(e.target.value); // Update parent email state
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

export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [email, setEmail] = useState(''); // Add state for email
  const [isPayEnabled, setIsPayEnabled] = useState(false); // State for pay button

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSignUpOpen = () => setSignUpOpen(true);

  const handleSignInOpen = () => {
    const userData = { email }; // Use the email state
    localStorage.setItem('userData', JSON.stringify(userData)); // Save to local storage
    setSignInOpen(true); // Open the sign-in modal
  };

  const handleSignInSuccess = () => {
    setIsPayEnabled(true); // Enable the pay button on successful sign-in
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
    // Reset email and password if needed
  };
  const handleSignInClose = () => {
    setSignInOpen(false);
    // Reset email and password if needed
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: 'black', color: 'white', height: '50px', width: '300px',marginBottom:'20%' }}>Complete Payment Process</Button>

      <SignUpModal open={signUpOpen} handleClose={handleSignUpClose} />
      <SignInModal open={signInOpen} handleClose={handleSignInClose} setEmail={setEmail} onSignInSuccess={handleSignInSuccess} /> {/* Pass setEmail and success handler to SignInModal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Button sx={{ backgroundColor: 'black', color: 'white', width: '300px', mb: 2 }} onClick={handleSignUpOpen}>
            Don't have an account? Sign Up
          </Button>
          <Button sx={{ backgroundColor: 'white', color: 'black', width: '300px', mb: 2, border: '1px solid black' }} onClick={handleSignInOpen}>Already have an account? Sign In</Button>
          <Link href="./CreditCard" style={{ textDecoration: 'none' }}>
            <Button sx={{ backgroundColor: 'white', color: 'black', width: '300px', mb: 2, border: '1px solid black' }} disabled={!isPayEnabled}>Pay</Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}