import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'actions/user/user';
import UserProvider from 'components/userProvider/UserProvider';

const UserProviderContainer = () => {
  const dispatch = useDispatch();
  const { name, phone, status, uuid } = useSelector((state) => state.user);

  const handleShowLoaderClick = useCallback(async () => {
    dispatch(fetchUsers, { shouldHandleLoadingState: true });
  }, [dispatch]);

  return (
    <UserProvider onShowLoaderClick={handleShowLoaderClick} name={name} phone={phone} status={status} uuid={uuid} />
  );
};

export default UserProviderContainer;
