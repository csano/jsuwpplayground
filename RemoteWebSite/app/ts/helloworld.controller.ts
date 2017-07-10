class HelloWorldController {
  private $scope: ng.IScope;
  constructor($scope: ng.IScope) {
    let name = new WinRtComponent.Name('Chris', 'Sano');
    let greeter = new WinRtComponent.Greeter();
    greeter.ongreet = (ev: WinRtComponent.GreetEventArgs) => {
      $scope.greeting = ev.message;
      $scope.$apply();
    };
    setTimeout(function() { greeter.sayHelloTo(name); }, 1000);
  }
}
