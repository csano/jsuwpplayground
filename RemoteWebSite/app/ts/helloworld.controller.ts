class HelloWorldController {
  constructor($scope: ng.IScope) {
    const name = new WinRtComponent.Name('Chris', 'Sano');
    $scope.greeting = WinRtComponent.Greeter.sayHelloTo(name);
  }
}
