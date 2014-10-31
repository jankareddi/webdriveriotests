## Introduction

A simple example to help set up and run automation tests on Windows platform using:

 1. [webdriverio](http://webdriver.io/)
 2.  [mocha](http://visionmedia.github.io/mocha/)
 3.  [chai](http://chaijs.com/)

webdriverio is a wrapper for Selenium web driver.

## Installation
Make sure you have the following installed:

1. Java run time - the run time should be included in PATH
2. Install [node](http://nodejs.org)
3. Install Selenium start command from [here](https://github.com/vvo/selenium-standalone)
4. It will help to install [node-inspector](https://github.com/node-inspector/node-inspector) for debugging your tests
5. Clone this repository
6. Run **npm install** from node.js command shell
7. Update url, userId, password in config file
8. Run **mocha test_mocha.js** and watch the results
9. ** Better alternative ** - Added a  grunt script. So all tests can be run by either grunt or grunt test. In addition, a file with tests targeting a specific area can be executed by grunt testArea:<fileName without the js extension>.

## Debugging tips
Try these steps. They worked for me:

1. In one node.js command shell, run **node-inspector**
2. In a second node.js command shell, run **mocha --debug-brk test_mocha.js**
3. Open chrome and point it to **127.0.0.1:8080/debug?port=5858**. The control will stop at the first executing line. Set your break points and hit F8
