import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import OTPForm from './components/OTPForm';
import WelcomePage from './components/WelcomePage';

function App() {
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleOTPGenerated = () => {
    setOtpGenerated(true);
  };

  const handleSuccess = () => {
    alert("OTP verified successfully")
    setAuthenticated(true);
  };

  if (authenticated) {
    return <WelcomePage />;
  }

  return (
    <div className="App">
      {!otpGenerated ? (
        <EmailForm onOTPGenerated={handleOTPGenerated} />
      ) : (
        <OTPForm onSuccess={handleSuccess} />
      )}
    </div>
  );
}

export default App;
