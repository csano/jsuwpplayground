declare namespace WinRtComponent {
  class Greeter {
    public static sayHelloTo(name: Name);
  }

  class Name {
    public readonly first: String;
    public readonly last: String;
    constructor(first: string, last: string);
  }
}