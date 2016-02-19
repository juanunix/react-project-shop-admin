import Login from '../components/login-register/Login';
import firebaseUtils from './firebaseUtils';

function requireAuth(nextState, replace) {
  if (!firebaseUtils.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = requireAuth;
