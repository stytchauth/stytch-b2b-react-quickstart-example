import { AdminPortalB2BProducts } from '@stytch/react/b2b/adminPortal'
import { AuthFlowType, B2BProducts, B2BOAuthProviders } from "@stytch/vanilla-js";

type Role = {
  role_id: string;
  description: string;
}

export const adminPortalConfig = {
  allowedAuthMethods: [
    AdminPortalB2BProducts.emailMagicLinks,
    AdminPortalB2BProducts.sso,
    AdminPortalB2BProducts.oauthGoogle
  ],
  getRoleDescription: (role: Role) => {
    if (role.role_id == 'stytch_admin') {
      return 'Able to manage settings and members'
    } else if (role.role_id == 'stytch_member') {
      return 'Able to view settings and members, but cannot edit'
    } else {
      return role.description;
    }
  },
  getRoleDisplayName: (role: Role) => {
    if (role.role_id == 'stytch_admin') {
      return 'Admin'
    } else if (role.role_id == 'stytch_member') {
      return 'Member'
    } else {
      return role.role_id
    }
  }
}

export const discoveryConfig = {
  products: [B2BProducts.sso, B2BProducts.oauth, B2BProducts.emailMagicLinks, B2BProducts.passwords],
  sessionOptions: { sessionDurationMinutes: 60 },
  oauthOptions: {
    providers: [{type: B2BOAuthProviders.Google}]
  },
  authFlowType: AuthFlowType.Discovery,
  passwordOptions: {
    resetPasswordRedirectURL: `${window.location.origin}/reset`,
    resetPasswordExpirationMinutes: 30,
  },
};

export const adminPortalStyles = {
  fontFamily: 'IBM Plex Sans',
}

export const discoveryStyles = {
  fontFamily: 'IBM Plex Sans',
  container: {
    width: '500px',
  },
}