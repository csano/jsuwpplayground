namespace WinRtComponent
{
    public delegate void GreetingHandler(object sender, GreeterEventArgs e);

    public sealed class Greeter
    {
        public event GreetingHandler Greet;

        public string SayHelloTo(Name name)
        {
            var greeting = $"Hello, {name.First} {name.Last}!";
            DoGreet(greeting);
            return greeting;
        }

        public void DoGreet(string message)
        {
            Greet?.Invoke(this, new GreeterEventArgs() { Message = message } );
        }
    }

    public sealed class Name
    {
        public string First { get; }
        public string Last { get; }

        public Name(string first, string last)
        {
            First = first;
            Last = last;
        }
    }

    public sealed class GreeterEventArgs
    {
        public string Message { get; internal set; }
    }
}
