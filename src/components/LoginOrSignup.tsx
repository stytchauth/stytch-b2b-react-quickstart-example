import { StytchB2B } from "@stytch/react/b2b";
import { discoveryConfig, discoveryStyles } from '../utils/stytchConfig';
import { StytchEventType } from '@stytch/vanilla-js';
import { useNavigate } from 'react-router-dom';

export const LoginOrSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="centered-login">
      <StytchB2B
      config={discoveryConfig}
      styles={discoveryStyles}
      callbacks={{
        onEvent: (event) => {
          if (event.type === StytchEventType.AuthenticateFlowComplete) {
            navigate('/dashboard', { replace: true });
          }
        },
      }}
      />
    </div>
  );
};
