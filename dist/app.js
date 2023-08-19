/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\r\nconst searchIcon = document.querySelector(\".search-icon\");\r\nconst searchBox = document.querySelector(\".search input[type='text']\");\r\nconst searchDropdown = document.querySelector(\".search-dropdown\");\r\nconst menu = document.querySelector(\".menu\");\r\nconst offerBtn = document.getElementById(\"offerBtn\");\r\nconst offerSubMenu = document.getElementById(\"offerSubMenu\");\r\nconst photo7 = document.getElementById(\"photo7\");\r\nconst photo8 = document.getElementById(\"photo8\");\r\nconst photo9 = document.getElementById(\"photo9\");\r\nconst photo4 = document.getElementById(\"photo4\");\r\nconst photo2 = document.getElementById(\"photo2\");\r\nconst photo6 = document.getElementById(\"photo6\");\r\nconst rozwinBtn = document.getElementById(\"rozwinBtn\");\r\n\r\nofferBtn.addEventListener(\"mouseover\", () => {\r\n    offerSubMenu.classList.remove(\"hidden\");\r\n  });\r\n  \r\n  offerSubMenu.addEventListener(\"mouseleave\", () => {\r\n    offerSubMenu.classList.add(\"hidden\");\r\n  });\r\n\r\n\r\nsearchIcon.addEventListener(\"mouseenter\", () => {\r\n  searchBox.classList.remove(\"hidden\");\r\n  searchDropdown.classList.remove(\"hidden\");\r\n  menu.classList.add(\"hidden\");\r\n  searchIcon.classList.add(\"hidden\");\r\n});\r\n\r\nsearchBox.addEventListener(\"mouseleave\", () => {\r\n  searchBox.classList.add(\"hidden\");\r\n  searchDropdown.classList.add(\"hidden\");\r\n  menu.classList.remove(\"hidden\");\r\n  searchIcon.classList.remove(\"hidden\");\r\n});\r\n\r\nsearchBox.addEventListener(\"focus\", () => {\r\n  searchDropdown.classList.remove(\"hidden\");\r\n});\r\n\r\nsearchBox.addEventListener(\"blur\", () => {\r\n  searchDropdown.classList.add(\"hidden\");\r\n});\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  photo7.style.display = \"none\";\r\n  photo8.style.display = \"none\";\r\n  photo9.style.display = \"none\";\r\n\r\nconst rozwinBtn = document.getElementById(\"rozwinBtn\");\r\n  rozwinBtn.addEventListener(\"click\", () => {\r\n   \r\n    if (photo7.style.display === \"none\") {\r\n      photo7.style.display = \"block\";\r\n      photo8.style.display = \"block\";\r\n      photo9.style.display = \"block\";\r\n    } else {\r\n      photo7.style.display = \"none\";\r\n      photo8.style.display = \"none\";\r\n      photo9.style.display = \"none\";\r\n    }\r\n  });\r\n});\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  let isExpanded = false;\r\n  rozwinBtn.addEventListener(\"click\", () => {\r\n     \r\n      if (photo4.classList.contains(\"blur\")) {\r\n          photo4.classList.remove(\"blur\");\r\n          photo2.classList.remove(\"blur\");\r\n          photo6.classList.remove(\"blur\");\r\n          rozwinBtn.textContent = \"Zwiń\";\r\n      } else {\r\n          photo4.classList.add(\"blur\");\r\n          photo2.classList.add(\"blur\");\r\n          photo6.classList.add(\"blur\");\r\n          rozwinBtn.textContent = \"Rozwiń\";\r\n      }\r\n      isExpanded = !isExpanded;\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://front-end/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;