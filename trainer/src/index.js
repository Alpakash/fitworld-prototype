import './main.sass';
import { Elm } from './Main.elm';
import * as serviceWorker from './serviceWorker';

const cacheKey = "fitworld-trainer-cache";

const cache = {
  set: (val) => {
    return localStorage.setItem(cacheKey, JSON.stringify(Object.assign({}, cache.get(), val)));
  },
  get: () => {
    return JSON.parse(localStorage.getItem(cacheKey));
  }
};

const app = Elm.Main.init({
  node: document.getElementById('root'),
  flags: {
    token: cache.get().token
  }
});

app.ports.setToken.subscribe(function(token) {
  cache.set({token});
  console.log(cache.get(), token);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
