import Image from "next/image";

export function LogoSvg({ className }: { className?: string }) {
  return (
    <Image
      src="/logotype.png"           // lives in /public/logotype.png
      alt="Store logo"
      width={292}                   // adjust if you want a different natural size
      height={61}
      className={className}
      priority
    />
  );
}
