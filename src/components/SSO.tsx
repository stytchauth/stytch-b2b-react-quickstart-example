import { AdminPortalSSO } from '@stytch/react/b2b/adminPortal';
import { config, styles } from '../utils/adminPortalConfig';

const SSO = () => {
    return <AdminPortalSSO config={config} styles={styles} />;
};

export default SSO;