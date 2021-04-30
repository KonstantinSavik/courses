import { Provider } from 'react-redux';

import UserProviderContainer from 'containers/userProvider/UserProviderContainer';
import Loader from 'components/loader/Loader';

import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <UserProviderContainer />
    <Loader />
  </Provider>
);

export default App;
