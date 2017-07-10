using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Foundation.Collections;

namespace WinRtComponent
{
    public delegate void ProtocolActivationHandler(object sender, ProtocolActivationEventArgs e);

    public sealed class ProtocolActivationEventArgs
    {
        public string Command { get; set; }
        public StringMap Arguments { get; set; }

        public ProtocolActivationEventArgs()
        {
            Arguments = new StringMap();
        }
    }

    public sealed class UriHandler
    {
        public event ProtocolActivationHandler ProtocolActivation;
        public void ProcessUri(Uri uri)
        {
            var eventArgs = new ProtocolActivationEventArgs
            {
                Command = uri.Host

            };

            ProtocolActivation?.Invoke(this, eventArgs);
        }
    }

}
