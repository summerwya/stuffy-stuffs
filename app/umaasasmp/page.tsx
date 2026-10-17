import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 grid md:grid-cols-2 text-white w-full h-full p-6 gap-3">
        <div className="flex flex-col items-center lg:my-5 border-b-4 md:border-b-0">
          <h1 className="text-3xl text-center font-bold mb-3">UMAASA SMP</h1>
          <Image
            width="1536"
            height={1024}
            alt="Zoi Baterbonia"
            src="/zoi_baterbonia.png"
            className="max-w-[80dvw] md:max-w-150"
            loading="lazy"
            />
          <p className="text-center italic">Zoi Baterbonia</p>
        </div>
        <div className="lg:my-5 p-5 text-left">
          <p className="text-box">Uma-asa SMP is a regular survival minecraft server where you can hangout w ppl and stuff!</p>
          <h2 className="text-xl mt-10 my-5 border-b-3">How to Join?</h2>
          
          <p className="mb-10">There's two methods to join in the fun!</p>

          <div>
            <h3 className="text-lg border-b-3 mb-5">Modflare Method</h3>
            <p className="mb-5">This method is the easiest one to do! But there's no Voice Chat. For Voice Chat to work, use the <a href="#cloudflare-method">Cloudflare Method</a>.</p>
            <span><b>Step 1:</b> <span>Download <a href="https://modrinth.com/mod/modflared" target="_blank">Modflared</a> on your Minecraft Client.</span></span><br />
            <span><b>Step 2:</b> <span>Open Minecraft, join using <code>umaasasmp.stuffy-stuffs.com</code></span>.</span><br />
            <span className="italic mt-10">If you can't join, make sure that you actually have Modflared installed and IS using the right address!</span>
          </div>

          <div className="mt-10">
            <h3 className="text-lg border-b-3 mb-5" id="cloudflare-method">Cloudflare One Method</h3>
            <p className="mb-5">Requires a bit of set up but is worth it! <b>Mobile Java Players are REQUIRED to use this method.</b></p>

            <b>Step 1:</b> <span><b>Download</b> <a href="https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/download">Cloudflare One</a> for your device.</span><br />
            <b>Step 2:</b> <span><b>Open</b> the Cloudflare One app, then Use <code>stuffy-stuffs</code> as the "organization/team name."</span><br />
            <b>Step 3:</b> Login using an email (no need to sign up, it'll only send you an OTP) (You can use a throwaway email) <br />
            <b>Step 4:</b> After logging in, click the "Connect" button. <br />
            <b>Step 5:</b> In Minecraft, connect to the server using the address <code>192.168.5.32</code><br />
          </div>
        </div>
    </div>
  );
}
