import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        draggable={false}
        src="/icons/logo.svg"
        alt="Logo"
        width={200}
        height={100}
      />
    </Link>
  );
}
