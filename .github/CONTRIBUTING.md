In order to contribute to the repository:

- Fork the repository
- Clone your fork locally
- Install dependencies via `yarn` or `npm i`
- Make your changes and commit them
- Open your PR with the description of changes

The automated CI on PRs will help you with quality assurance, testing, best practices and accessibility issue detections.

You can also run it locally via commands:

- `yarn lint:all` or `npm run lint:all` in the root directory for linting
- `yarn type-check:watch` or `npm run type-check:watch` in the root directory for type checking via TypeScript
- `yarn test:e2e:dev` or `npm run test:e2e:dev` in the example project directories for running E2E test via Cypress
