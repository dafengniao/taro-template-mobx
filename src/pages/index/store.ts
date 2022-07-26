import { makeAutoObservable } from 'mobx';
import { test } from 'Utils';
import { fetchTestApi } from './services';

class indexStore {
  count: number = 1;
  constructor() {
    makeAutoObservable(this);
  }
  setCount = () => {
    console.log('----count add');
    test();
    fetchTestApi({})
      .then(() => {})
      .catch(() => {});
    this.count = this.count + 1;
  };
}

export default new indexStore();
