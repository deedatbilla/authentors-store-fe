import { createBrowserHistory, createMemoryHistory } from 'history';

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

let history = {};

if (isBrowser) {
  history = createBrowserHistory({forceRefresh:true});
} else if (isNode) {
  history = createMemoryHistory();
}

export { history, isNode, isBrowser };
