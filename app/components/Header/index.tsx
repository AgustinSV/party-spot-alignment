import Image from "next/image"

export default function Header() {
  return (
    <div className="h-18 flex justify-center items-center">
      <Image 
        className="mr-1"
        src="/logo.png"
        width={25}
        height={25}
        alt="party spot alignment logo"
      />
      <div>PartySpotAlignment</div>
    </div>
  );
}
