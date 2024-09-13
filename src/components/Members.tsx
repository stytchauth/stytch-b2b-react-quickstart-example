import { AdminPortalMemberManagement } from '@stytch/react/b2b/adminPortal';
import { config, styles } from '../utils/adminPortalConfig';

const Members = () => {
    return <AdminPortalMemberManagement styles={styles} config={config} />;
};

export default Members;