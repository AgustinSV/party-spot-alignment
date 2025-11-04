import Image from "next/image";

export default function DemoImg() {
  return (
    <div className="flex justify-center m-12 pt-20 md:pt-24 md:scale-125 xl:scale-150">
      <Image
        className="relative bottom-5 left-10 z-0"
        src="/main_page_var_no_visible_header.png"
        width={400}
        height={400}
        alt="demo images"
      />
      <Image
        className="z-10"
        src="/main_page_var_no_visible_header.png"
        width={400}
        height={400}
        alt="demo images"
      />
      <Image
        className="relative bottom-5 right-10 z-0"
        src="/main_page_var_no_visible_header.png"
        width={400}
        height={400}
        alt="demo images"
      />
    </div>
  );
}
