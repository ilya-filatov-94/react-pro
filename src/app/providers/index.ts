import { compose } from 'shared/lib/compose';
import { withRedux } from './Redux';
import { withTooltip } from './CustomTooltip';

export const withProviders = compose(withRedux, withTooltip);
