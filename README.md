# [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js) demo with Angular


#### Step 1
Install lightgallery.js package via npm

`npm install lightgallery.js`

Install required [plugin ](https://github.com/sachinchoolur/lightgallery.js#built-in-modules) (optional)

`npm install lg-zoom.js lg-share.js`


#### Step 2

Add lightgallery to the runtime global scope

 1) Add lightgallery.js path to the `scripts` field in the angular.json file
 
 Note: Do not include any lightGallery plugins in the script tag. 
 
 You need to import them in the component file - Described in step 4
```
"scripts": [
  "node_modules/lightgallery.js/dist/js/lightgallery.js",
]
```

2) Add lightgallery.css path to the `styles` field in the angular.json file
```
"styles": [
  "node_modules/lightgallery.js/dist/css/lightgallery.css",
],
```

#### Step 3 
Define typings for lightgallery.js

In `src/typings.d.ts` add the following line 

`declare var lightGallery: any;` 

#### Step 4

import all the required plugins in the component file

``` ts
import { Component } from '@angular/core';
import 'lg-zoom.js';
import 'lg-share.js';
import 'lg-video.js';
```

#### Step 5

Invoke lightgallery

``` ts
ngOnInit() {
  lightGallery(document.getElementById('lightgallery'));
}

```
Take a look at [this](https://github.com/sachinchoolur/lightgallery.js-anguar-demo/commit/0bab05edc8c25e9a48809ebb05b0f454c695fcd2) commit for referance 

-----------------------------



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
