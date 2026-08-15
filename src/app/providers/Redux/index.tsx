import type { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store/store.ts';

export const withRedux = (WrappedComponent: ComponentType) => {
  const ReduxProvider = (props: any) => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );

  ReduxProvider.displayName = 'ReduxProvider';
  return ReduxProvider;
};
