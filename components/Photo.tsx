import Image from "next/image";

export default function Photo() {
  return (
    <div className=" w-full h-full relative">
        <div className="w-[298px] h-[298px] md:h-[498px] md:w-[498px] mix-blend-lighten">
        <Image
            src="/images/hamad-dp.png"
            alt=""
            quality={100}
            priority
            fill
            className=" object-contain "
            />
        </div>
    </div>
  );
}
