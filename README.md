# BeetrootTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.



project info

1. there is only one route - on schedule page(in the app this is main page)
2. the main object is Service Center, in the headerComponent onInit we send request to get this object
3.  if user first time use this website  - server send ServiceCenter with id 1, and app save id in localStorage
4.  if user change Client Service, app rewrite it id in localStorage, and next time on request he got service Center that he select before
5.   in headerComponent => locationPopUp component use googleMaps API
6.