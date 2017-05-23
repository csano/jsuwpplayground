namespace WinRtComponent
{
    public sealed class Greeter
    {
        public static string SayHelloTo(Name name)
        {
            return $"Hello, {name.First} {name.Last}!";
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
}
