import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './LoaderProvider.module.scss';
import { START_LOADING, STOP_LOADING } from '../../actions/types';

const LoaderProvider = () => {
  const dispatch = useDispatch();

  const handleShowLoaderClick = useCallback(() => {
    dispatch({ type: START_LOADING });
  }, [dispatch]);

  const handleHideLoaderClick = useCallback(() => {
    dispatch({ type: STOP_LOADING });
  }, [dispatch]);

  return (
    <div className={styles['buttons-wrapper']}>
      <Button onClick={handleShowLoaderClick} variant="contained" color="primary">
        Show loader
      </Button>
      <Button onClick={handleHideLoaderClick} variant="contained" color="primary">
        Hide loader
      </Button>
    </div>
  );
};

export default LoaderProvider;
