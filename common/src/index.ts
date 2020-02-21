import UserQueries from './queries/UserQueries';
import Styles from './styled/StyledComponents';
import Themes from './theming/theme';
import OverrideThemeProvider from './OverrideThemeProvider';

const Queries = {
  ...UserQueries
};

const StyledComponents = {
 ...Styles
}

const Theme = {
...Themes
}

// Mixins, styles which will be used more often in different components
const Mixins = {}
const Mutations = {}

export { Queries, Mutations, StyledComponents, Theme, Mixins, OverrideThemeProvider }
