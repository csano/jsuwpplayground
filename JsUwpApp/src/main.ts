
window.onload = () => {
    var name = new WinRtComponent.Name("Chris", "Sano");
    var greeter = new WinRtComponent.Greeter();
    greeter.ongreet = greet;
    greeter.sayHelloTo(name);

    var app = WinJS.Application;
    app.addEventListener("activated", onActivatedHandler, true);
    app.start();
}


function greet(ev: WinRtComponent.GreeterEventArgs) {
  document.getElementById('greeting').innerText = ev.message;
}

function onActivatedHandler(eventArgs: any) {
    if (eventArgs.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.protocol) {

        //eventArgs.detail.detail[0].uri.host
    }
    console.log("activated");
}