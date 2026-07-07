export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-3 text-white w-full h-full p-6 gap-6">
      <section className="section col-span-3 md:col-span-1 overflow-y-scroll no-scrollbar">
        <h2 className="text-center text-2xl mb-5">Hai hai! <b>I&apos;m <u>Summer</u>!</b></h2>

        <h3 className="text-xl my-5">About me</h3>

        <ul className="ml-10 mt-5 list-disc">
          <li>I&apos;m 16</li>
          <li>Linux user (Been using it for 6 years now)</li>
          <li>I <b>don&apos;t</b> play games, I only really play rhythm games</li>
          <li>Poor (God, i LOVE the Philippines)</li>
          <li>Outside I&apos;m <u>fine</u> but i&apos;m really... <span className="underline italic font-bold">filipino</span>...</li>
          <li>Yapperist</li>
        </ul>

        <h3 className="text-xl my-5">My Hobbies:</h3>
        
        <ul className="ml-10 mt-5 list-disc">
          <li>2D/3D Animation
            <ul className="ml-5 list-disc">
              <li>May or may not have been a gacha kid</li>
            </ul>
          </li>
          <li>Software Development (Started when I was 10)
            <ul className="ml-5 list-disc">
              <li>Largest project was an all-in-one discord bot that combined dyno, mee6, reaction roles, and verifier bot all in one bot. You could also customize it however you liked</li>
              <li>I&apos;ve also made projects with the ESP8266, captive portal stuff, messaging, video calling, and also an image upload site</li>
            </ul>
          </li>
          <li>Computer System Servicing and Maintenance
            <ul className="ml-5 list-disc">
              <li>Yes, I can repair and diagnose computers</li>
              <li>Yes, I can build computers</li>
              <li>Yes, I can get you the best specs that&apos;ll fit your budget</li>
            </ul>
          </li>
          <li>Talking to loads of ppl
            <ul className="ml-5 list-disc">
              <li>PLEASE talk to me, I&apos;m really friendly</li>
            </ul>
          </li>
          <li>Reading <b className="italic">*normal*</b> books
            <ul className="ml-5 list-disc">
              <li>like documentation stuffs.</li>
              <li className="line-through italic">ok mayb i also read ao3 stuffs but still</li>
            </ul>
          </li>
        </ul>

        <span className="block mt-10 text-center text-2xl">Please check out my socials at the top! Sorted by where I&apos;m most active in</span>
      </section>
      <section className="section hidden md:flex md:col-span-2 items-center justify-center">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/aJ36t6xm-1w?rel=0" allowFullScreen allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerPolicy="strict-origin"></iframe>
      </section>
    </div>
  );
}
