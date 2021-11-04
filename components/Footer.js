function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10
    px-32 py-14 bg-gray-100 text-gray-600 items-center"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>Not affiliated with Airbnb</p>
        <p>Demo Build</p>
        <p>For educational</p>
        <p>And portfolio</p>
        <p>Purposes</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Thanks to</p>
        <p>Sonny Sangha</p>
        <p>For assistance</p>
        <p>With this build</p>
        <p>And much more</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Do not try</p>
        <p>To become a host</p>
        <p>Through this site</p>
        <p>It will not work</p>
        <p>We promise</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
}

export default Footer;
