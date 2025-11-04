export default function HeroHeader() {
  return (
    <div className="text-center pt-18 px-3 md:px-22 lg:px-38">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        What Does Your Music
        <br className="md:hidden"/>
        <span className="hidden md:inline"> </span>
        Say About You?
      </div>
      <div className="pt-5 pb-9 lg:pb-15 mx-6 md:text-md lg:text-lg text-gray-200">
        Connect your Spotify to see how your top artists and genres align with
        different<br className="hidden lg:inline"/> political identities, based on real-world data trends.
      </div>
    </div>
  );
}
