import Image from "next/image";

export default function Button() {
  return (
    <div className="flex justify-center">
      <button className="bg-[#1CB351] rounded-3xl py-3 px-5 flex">
        <Image
          src="/spotify-icon.png"
          width={25}
          height={25}
          alt="spotify logo"
        />
        <div className="pl-1 uppercase">connect with spotify</div>
      </button>
    </div>
  );
}
