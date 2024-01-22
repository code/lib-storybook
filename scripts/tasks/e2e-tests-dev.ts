import { PORT } from './dev';
import { e2eTestsBuild } from './e2e-tests-build';

export const e2eTestsDev: typeof e2eTestsBuild = {
  ...e2eTestsBuild,
  description: 'Run e2e tests against a sandbox in dev mode',
  dependsOn: ['dev', 'install-playwright'],
  port: PORT,
};
