import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import Overlay from './overlay/Overlay';
import styles from './Loader.module.scss';

const Loader = ({ className }) => {
  const isLoading = useSelector((state) => state.loading);

  return (
    isLoading && (
      <>
        <div className={classNames(styles.loader, className, styles.centered)}>
          <img alt="logo" className={styles['loader-icon']} src={`${process.env.PUBLIC_URL}/logo192.png`} />
        </div>
        <Overlay />
      </>
    )
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
