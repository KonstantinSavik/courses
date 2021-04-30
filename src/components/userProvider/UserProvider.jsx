import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './UserProvider.module.scss';

const UserProvider = ({ onShowLoaderClick, uuid, name, phone, status }) => (
  <div className={styles['buttons-wrapper']}>
    <Button onClick={onShowLoaderClick} variant="contained" color="primary">
      Fetch data
    </Button>
    <p>Uuid: {uuid}</p>
    <p>User Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Status: {status}</p>
  </div>
);

UserProvider.propTypes = {
  name: PropTypes.string.isRequired,
  onShowLoaderClick: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
};

export default UserProvider;
