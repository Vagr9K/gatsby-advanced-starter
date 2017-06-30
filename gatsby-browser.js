import ReactGA from 'react-ga';
import { config } from 'config';

if (config.googleAnalyticsID) {
  ReactGA.initialize(config.googleAnalyticsID);

  exports.onRouteUpdate = (state) => {
    ReactGA.pageview(state.pathname);
  };
}
