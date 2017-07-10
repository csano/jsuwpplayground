declare namespace WinRtComponent {
  class Greeter {
    public sayHelloTo(name: Name);
    ongreet: (ev: GreetEventArgs) => void;

  }

  class Name {
    public readonly first: String;
    public readonly last: String;
    constructor(first: string, last: string);
  }

  interface GreetEventArgs {
    message: String;
  }
}