const { getJestProjectsAsync } = require('@nx/jest');

export default async () => ({
  setupFilesAfterEnv: ['<rootDir>/scripts/jest/toHaveCssClass.ts'],
  projects: await getJestProjectsAsync()
});
