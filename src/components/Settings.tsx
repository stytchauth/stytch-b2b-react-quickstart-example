import { AdminPortalOrgSettings, AdminPortalB2BProducts } from '@stytch/react/b2b/adminPortal';

const Settings = () => {

  const styles = { fontFamily: 'Courier New' };

  const config = {
    allowedAuthMethods: [AdminPortalB2BProducts.emailMagicLinks, AdminPortalB2BProducts.sso],
  };

  return <AdminPortalOrgSettings styles={styles} config={config} />;
};

export default Settings;
