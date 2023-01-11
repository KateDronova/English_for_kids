import { fillInTheContent, returnToTrainMode } from "./section.js";
const menuItems = document.querySelectorAll("nav li");
let numOfSection;

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById("app");
  },
  init: function () {
    let r = this.routes;
    (function (scope, r) {
      window.addEventListener("hashchange", function () {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function (scope, r) {
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          const currentPage = Array.from(menuItems).find(
            (item) => item.id === route.name
          ); // Add "active" state to current section of menu
          menuItems.forEach((item) => item.classList.remove("active"));
          currentPage.classList.add("active");

          switch (route.name) {
            case "action1":
              numOfSection = 1;
              break;
            case "action2":
              numOfSection = 2;
              break;
            case "animal1":
              numOfSection = 3;
              break;
            case "nature":
              numOfSection = 4;
              break;
            case "animal2":
              numOfSection = 5;
              break;
            case "clothes":
              numOfSection = 6;
              break;
            case "food1":
              numOfSection = 7;
              break;
            case "food2":
              numOfSection = 8;
              break;
            case "emotions":
              numOfSection = 9;
              break;
            case "body":
              numOfSection = 10;
              break;
          }
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute: function (htmlName) {
    (function (scope) {
      let url = "views/" + htmlName,
        xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
          returnToTrainMode();
          fillInTheContent(numOfSection);
        }
      };
      console.log("url: ", url);
      xhttp.open("GET", url, true);
      xhttp.send();
    })(this);
  },
};

export default function Router(routes) {
  try {
    if (!routes) {
      throw "error: routes param is mandatory";
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

export { numOfSection };
export { menuItems };
