import Route from './route.js';
import Router from './router.js';

export default function setRoutes() {
  new Router([
    new Route('main', 'main.html', true),
    new Route('action1', 'commonSection.html', false),
    new Route('action2', 'commonSection.html', false),
    new Route('animal1', 'commonSection.html', false),
    new Route('animal2', 'commonSection.html', false),
    new Route('body', 'commonSection.html', false),
    new Route('clothes', 'commonSection.html', false),
    new Route('food1', 'commonSection.html', false),
    new Route('food2', 'commonSection.html', false),
    new Route('nature', 'commonSection.html', false),
    new Route('emotions', 'commonSection.html', false),
    new Route('statistics', 'statistics.html', false),
  ]);
}
