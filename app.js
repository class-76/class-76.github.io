const bar = document.getElementById("sidebar");
const overflowMenu = document.getElementById("overflow-menu");
document.addEventListener("click", function () {
  bar.classList.remove("movingbar");
});
document.addEventListener("mousemove", function (event) {
  if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
    bar.classList.add("movingbar");
  }
});

//**Above is the universal code for every MacWeb JavaScript file**//


// Slug map (for slug-based game pages)
let __slugMap = {};
fetch("games.json").then(r=>r.json()).then(d=>{
  (d.games||[]).forEach(g=>{ __slugMap[String(g.id)] = g.slug; });
}).catch(()=>{});

const google = ["Google", "/media/google.png"];
const canva = ["Home - Canva", "/media/canva.png"];
const clever = ["Clever | Portal", "/media/clever.png"];
const schoology = ["Home | Schoology", "/media/schoology.png"];
const newTab = ["New Tab", "/media/new-tab.png"];

function google1() {
  localStorage.setItem("title", google);
}

function canva1() {
  localStorage.setItem("title", canva);
}

function clever1() {
  localStorage.setItem("title", clever);
}

function schoology1() {
  localStorage.setItem("title", schoology);
}

function newTab1() {
  localStorage.setItem("title", newTab);
}

function unCloak() {
  const pageTon = document.querySelector(".cloak");
  const favicon = document.querySelector(".favicon");
  favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="/media/logo.png" />`;
  pageTon.innerHTML = "Settings | MacVG";
  localStorage.setItem("title", "");
}

function cloaking() {
  const name = document.getElementById("name").value;
  const favicon = document.querySelector(".favicon");
  localStorage.title = name + "," + favicon.href;
}

function faviconing() {
  const pageTon = document.querySelector(".cloak");
  const favicon = document.querySelector(".favicon");
  const faviSRC = document.getElementById("name4").value;
  let thingy = [pageTon.innerHTML, faviSRC];
  favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="${faviSRC}" />`;
  localStorage.setItem("title", thingy);
}

function changeName() {
  if (localStorage.title !== "") {
    const pageTon = document.querySelector(".cloak");
    const favicon = document.querySelector(".favicon");
    if (localStorage.title != null) {
      let all = localStorage.getItem("title");
      let alln = all.split(",");
      let title = alln[0];
      let image = alln[1];
      pageTon.innerHTML = title;
      setInterval(() => {
        pageTon.innerHTML = title;
      }, 3000);
      favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="${image}" />`;
    }
  }
}

//Above are the codes for tab cloaker and panic key

function sortStuff(targetArray, key) {
  if (key === "name") {
    targetArray.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    newArray = targetArray;
    let finalArrayIds = [];
    let finalGames = [];
    targetArray.forEach((item) => {
      finalArrayIds.push(item.id);
      finalGames.push(item.name);
    });
    arrangeBoxes(finalGames, finalArrayIds);
  } else if (key === "catagory") {
    targetArray.sort((a, b) => {
      const nameA = a.catagory.toUpperCase();
      const nameB = b.catagory.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    newArray = targetArray;
    let finalArrayIds = [];
    let finalGames = [];
    targetArray.forEach((item) => {
      finalArrayIds.push(item.id);
      finalGames.push(item.name);
    });
    arrangeBoxes(finalGames, finalArrayIds);
  } else if (key === "direction") {
    let gameList = document.getElementById("list").querySelectorAll(".game");
    gameList = [...gameList].reverse();
    let finalArrayIds = [];
    let finalGames = [];
    gameList.forEach((item) => {
      finalArrayIds.push(item.getAttribute("id").slice(4));
      finalGames.push(item.innerHTML);
    });
    arrangeBoxes(finalGames, finalArrayIds);
  }
}

function filterStuff(colorArray, color) {
  if (
    color === "action" ||
    color === "strategy" ||
    color === "casual" ||
    color === "driving"
  ) {
    let finalArray = [];
    let finalArrayIds = [];
    colorArray.forEach((item) => {
      if (item.catagory === color) {
        finalArray.push(item.name);
        finalArrayIds.push(item.id);
      }
    });
    secondArray = finalArray;
    arrangeBoxes(finalArray, finalArrayIds);
  } else if (color === "featured") {
    let finalArray = [];
    let finalArrayIds = [];
    colorArray.forEach((item) => {
      if (item.featured) {
        finalArray.push(item.name);
        finalArrayIds.push(item.id);
      }
    });
    secondArray = finalArray;
    arrangeBoxes(finalArray, finalArrayIds);
  } else if (color === "download") {
    let finalArray = [];
    let finalArrayIds = [];
    colorArray.forEach((item) => {
      if (item.download) {
        finalArray.push(item.name);
        finalArrayIds.push(item.id);
      }
    });
    secondArray = finalArray;
    arrangeBoxes(finalArray, finalArrayIds);
  } else {
    let finalArrayIds = [];
    let finalArrayNames = [];
    everythingArray.forEach((item) => {
      finalArrayIds.push(item.id);
      finalArrayNames.push(item.name);
    });
    arrangeBoxes(finalArrayNames, finalArrayIds);
  }
}

function arrangeBoxes(newArrayy, newIds) {
  filterGamesList.innerHTML = "";
  let arrayIndex = 0;
  newArrayy.forEach((element) => {
    let newBox = document.createElement("a");
    newBox.classList.add("game");
    newBox.setAttribute("id", `game${newIds[arrayIndex]}`);
    newBox.innerHTML = element;
    everythingArray.forEach((item) => {
      if (item.id == newIds[arrayIndex]) {
        newBox.style.backgroundImage = `linear-gradient(
          rgba(40, 40, 40, 0.2),
          rgba(20, 20, 20, 0.9)
          ),
          url("${item.link + item.thumb}")`;
        newBox.addEventListener("click", () => {
          const params = new URLSearchParams({ target: item.id });
          window.location.href = `${__slugMap[String(item.id)] || item.id}.html`;
        });
      }
    });

    filterGamesList.appendChild(newBox);
    /*let computedStyle = window.getComputedStyle(newBox).backgroundImage;
    let computedStylee = computedStyle.substring(
      computedStyle.indexOf(`url("`) + 5
    );
    const projectsPosition = computedStylee.indexOf("projects/");
    const slashIndex = computedStylee.indexOf(
      "/",
      projectsPosition + "projects/".length
    );
    let computedStyleee = computedStylee.substring(0, slashIndex);*/
    filterGamesList.removeChild(newBox);
    //newBox.setAttribute("href", computedStyleee);
    filterGamesList.appendChild(newBox);
    arrayIndex++;
  });
}

//Above are the codes for filtering and sorting

function updateTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    const root = document.documentElement;
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--shadow-color", "0px 0px 5px rgb(84, 84, 84)");
    root.style.setProperty("--black-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
    root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
    root.style.setProperty("--bar-color", "rgb(200, 200, 200)");
  } else if (theme === "deep") {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--shadow-color", "0px 5px 5px rgb(25,25,25)");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--bg-color-2", "black");
    root.style.setProperty("--group-bg-color", "black");
    root.style.setProperty("--bar-color", "black");
    root.style.setProperty("--border", "rgb(50,50,50)");
  } else if (theme === "cyber") {
    const root = document.documentElement;
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--shadow-color", "0px 5px 5px #42053f");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "#0b023a");
    root.style.setProperty("--bg-color-2", "#ff00a0");
    root.style.setProperty("--group-bg-color", "rgba(48, 4, 98, 0.7)");
    root.style.setProperty("--bar-color", "#12827e");
    root.style.setProperty("--border", "rgb(50,50,50)");
  } else if (theme === "custom") {
    const root = document.documentElement;
    let first = localStorage.getItem("first");
    let second = localStorage.getItem("second");
    document.documentElement.style.setProperty("--bg-color", first);
    document.documentElement.style.setProperty("--bar-color", second);
    document.documentElement.style.setProperty("--link", second);
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--black-color", "black");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--bg-color-2", "white");
    root.style.setProperty("--group-bg-color", second);
  } else {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
    root.style.setProperty("--bg-color-2", "white");
    root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
    root.style.setProperty("--bar-color", "rgb(70, 70, 70)");
  }
}

function glowingTitle() {
  let hue = 0;
  const root = document.documentElement;
  setInterval(() => {
    hue = (hue + 3) % 360;
    root.style.setProperty("--f-t-color", `hsl(${hue}, 100%, 70%)`);
    root.style.setProperty("--s-t-color", `hsl(${hue + 60}, 100%, 70%)`);
    root.style.setProperty("--t-t-color", `hsl(${hue + 130}, 100%, 70%)`);
  }, 300);
}

function setGameNames() {
  const games = document.querySelectorAll(".game");
  games.forEach(function (game) {
    game.addEventListener("mouseover", function () {
      let innerThing = game.innerHTML;
      game.setAttribute("name", innerThing);
    });
  });
}

function select() {
  let list = document.getElementById("list");
  let items = list.getElementsByTagName("a");
  let itemsL = Array.from(items);
  let r = Math.random();
  let rw = Math.floor(r * 399);
  let selected = items[rw];
  itemsL.forEach(function (item) {
    if (item.contains(selected)) {
      let list = document.getElementById("randomList");
      item.setAttribute("name", item.innerHTML);
      item.style.paddingBlock = "10px";
      list.innerHTML = item.outerHTML;
      let id = item.getAttribute("id").slice(4);
      list.children[0].addEventListener("click", () => {
        const params = new URLSearchParams({ target: id });
        window.location.href = `${__slugMap[String(id)] || id}.html`;
      });
    }
  });
}

function search() {
  let searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("search-clear");
  if (searchInput.value.trim() !== "") {
    searchClear.style.display = "flex";
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.style.display = "none";
      var list = document.getElementById("list");
      var items = list.getElementsByTagName("a");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "flex";
      }
      searchInput.focus();
    });
  }
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("a");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemText = item.innerText.toLowerCase();

    if (itemText.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
}

setGameNames();
changeName();
updateTheme();
glowingTitle();

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  const helpMenus = document.querySelectorAll(".help-label");
  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("help-menu")) {
      helpMenus.forEach((helpMenu) => {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      });
    }
  });
  helpMenus.forEach((helpMenu) => {
    helpMenu.addEventListener("click", () => {
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      console.log(transformValue);
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("caret")) {
      let helpMenu = e.target.parentElement.getElementsByTagName("span")[0];
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    }
    if (e.target.classList.contains("select")) {
      let helpMenu = e.target.getElementsByTagName("span")[0];
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    }
  });
});