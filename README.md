## Leis SJC [![Build Status](https://travis-ci.org/transparenciasjc/leis.svg)](https://travis-ci.org/transparenciasjc/leis)

[![Join the chat at https://gitter.im/transparenciasjc/leis](https://badges.gitter.im/transparenciasjc/leis.svg)](https://gitter.im/transparenciasjc/leis?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular application to show all law-projects approved by the government of São José dos Campos.

**In This Documentation**

1. [Getting Started](#getting-started)
2. [Gulp Tasks](#gulp-tasks)
3. [File Structure](#file-structure)
4. [Scripts](#scripts)
5. [License](#license)

## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com)

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install -g yo bower grunt-cli gulp && npm install && bower install` to install required dependencies.
3. When it's done installing, run one of the task runners to get going:

## Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

### Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application

### Frameworks used on this project:

AngularJS: HTML enhanced for web apps!
https://angularjs.org/

Angular Material Design: The Angular reference implementation of the Google's Material Design specification.
https://material.angularjs.org/#/

Sass (Node): Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.
https://github.com/sass/node-sass

Jasmine: Behavior-Driven JavaScript.
http://jasmine.github.io/

BrowserSync: Time-saving synchronised browser testing.
http://browsersync.io/

GulpJS: The streaming build system.
http://gulpjs.com/

Protractor: End to end test framework for AngularJS applications built on top of WebDriverJS.
https://github.com/angular/protractor

Karma: Spectacular Test Runner for JavaScript.
http://karma-runner.github.io/


## File Structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

The root directory generated for a app with name `gulpAngular` :
<pre>
├──  src/
│   ├──  app/
│   │   ├──  components/
│   │   │   └──  navbar/
│   │   │   │   ├──  navbar.controller.js
│   │   │   │   └──  navbar.html
│   │   ├──  main/
│   │   │   ├──  main.controller.js
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  main.html
│   │   └──  index.js
│   │   └──  index.(css|less|scss)
│   │   └──  vendor.(css|less|scss)
│   ├──  assets/
│   │   └──  images/
│   ├──  404.html
│   ├──  favico.ico
│   └──  index.html
├──  gulp/
├──  e2e/
├──  bower_components/
├──  nodes_modules/
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .jshintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
├──  protractor.conf.js
</pre>

## Scripts

### Installing

* Install pip
		
		curl  https://bootstrap.pypa.io/get-pip.py | python

* Install requirements

		pip install -r scripts/requirements.txt


### Usage

If you are in a unix based system, just open a console and type one of the options below

	scripts/baixa_dados_camara_sjc.py

	scripts/baixa_foto_vereadores.py

Otherwise (Windows):

	python scripts/baixa_dados_camara_sjc.py

	python scripts/baixa_foto_vereadores.py

## License

Leis SJC is licensed under the [MIT License](http://gomakethings.com/mit/).
.
