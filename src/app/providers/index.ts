import { compose } from 'shared/lib/compose';
import { withRedux } from './Redux';

export const withProviders = compose(withRedux);
