angular
  .module('myApp', ['ngRoute', 'testModule'])
  .component('helloWorld', {
    template: `<h1>{{greeting}}</h1>`,
    controller: 'HelloWorldController'
  }).controller('HelloWorldController', HelloWorldController);
