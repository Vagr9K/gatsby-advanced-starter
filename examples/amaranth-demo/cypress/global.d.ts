declare namespace Cypress {
  interface Chainable {
    waitForRouteChange(): void;
    isInViewport(element: string): void;
  }
}
