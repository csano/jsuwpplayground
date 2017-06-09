declare module WinRtComponent {
  export class Name {
    constructor(firstName: string, lastName: string);
  }

  export class Greeter {
    doGreet(): void;
    sayHelloTo(name: Name): string;
    ongreet: (ev: GreetingHandler) => void;
  }

  export class GreeterEventArgs {
    constructor();
    toString(): string;
  }

  export interface GreetingHandler {
    target: any;
    detail: any[];
    type: string;
  }
}