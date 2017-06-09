namespace WinRtComponent
{
    public delegate void GreetingHandler(object sender, GreeterEventArgs e);

    public sealed class Greeter
    {
        public event GreetingHandler Greet;
        public string SayHelloTo(Name name)
        {
            DoGreet();
            return $"Hello, {name.First} {name.Last}!";
        }

        public void DoGreet()
        {
            Greet?.Invoke(this, new GreeterEventArgs());
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
    }
}
