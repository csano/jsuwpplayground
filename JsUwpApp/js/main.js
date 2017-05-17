
var Name = WinRtComponent.Name;
var Greeter = WinRtComponent.Greeter;

window.onload = function() {
    var name = new Name("Chris", "Sano");
    document.getElementById("greeting").innerText = Greeter.sayHelloTo(name);
}