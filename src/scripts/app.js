import Route from "./route.js";
import Router from "./router.js";

export default function setRoutes() {
  new Router([
    new Route("main", "./main.html", true),
    new Route("action1", "./action1.html"),
    new Route("action2", "./action2.html"),
    new Route("animal1", "./animal1.html"),
    new Route("animal2", "./animal2.html"),
    new Route("body", "./body.html"),
    new Route("clothes", "./clothes.html"),
    new Route("food1", "./food1.html"),
    new Route("food2", "./food2.html"),
    new Route("nature", "./nature.html"),
    new Route("emotions", "./emotions.html"),
    new Route("statistic", "./statistic.html"),
  ]);
}
