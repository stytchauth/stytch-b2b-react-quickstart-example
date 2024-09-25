import { StytchB2B } from "@stytch/react/b2b";
import { AuthFlowType, B2BProducts, B2BOAuthProviders } from "@stytch/vanilla-js";

export const LoginOrSignup = () => {
  const config = {
    products: [B2BProducts.oauth, B2BProducts.emailMagicLinks],
    sessionOptions: { sessionDurationMinutes: 60 },
    oauthOptions: {
      providers: [{type: B2BOAuthProviders.Google}]
    },
    authFlowType: AuthFlowType.Discovery,
  };

  return (
    <div className="centered-login">
      <StytchB2B config={config} />
    </div>
  );
};
