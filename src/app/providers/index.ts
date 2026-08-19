import { compose } from 'shared/lib/compose';
import { withRedux } from './Redux';
import { withTheme } from './ThemeProvider';
import { withTooltip } from './CustomTooltip';

export const withProviders = compose(withRedux, withTheme, withTooltip);
