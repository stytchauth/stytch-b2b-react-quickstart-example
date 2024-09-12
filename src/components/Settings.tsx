import { AdminPortalOrgSettings, AdminPortalB2BProducts } from '@stytch/react/b2b/adminPortal';

const Settings = () => {

  const styles = { fontFamily: 'Courier New' };

  const config = {
    allowedAuthMethods: [AdminPortalB2BProducts.emailMagicLinks, AdminPortalB2BProducts.sso],
    getRoleDescription: (role: any) => {
      if (role.role_id == 'stytch_admin') {
          return 'Able to manage settings and members'
      } else if (role.role_id == 'stytch_member') {
          return 'Able to view settings and members, but cannot edit'
      } else {
          return 'Your custom role description here!'
      }
  },
  getRoleDisplayName: (role: any) => {
      if (role.role_id == 'stytch_admin') {
          return 'Admin'
      } else if (role.role_id == 'stytch_member') {
          return 'Member'
      } else {
          return role.role_id
      }
  }
  };

  return <AdminPortalOrgSettings styles={styles} config={config} />;
};

export default Settings;
