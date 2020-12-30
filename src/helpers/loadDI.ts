import config from '../configs/di';
import DI from '../services/DI';

const handle = (): void => {
  config.forEach((entry) => {
    DI.register(entry.key, entry.dependency);
  });
};

export default handle;
