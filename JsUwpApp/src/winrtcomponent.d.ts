declare module WinRtComponent {
  class Name {
    constructor(firstName: string, lastName: string);
  }

  class Greeter {
    static sayHelloTo(name: Name);
  }
}