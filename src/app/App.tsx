import { withProviders } from './providers';
import { Layout } from 'widgets/layout';

export const App = withProviders(() => {
  return <Layout />;
});

export default App;

