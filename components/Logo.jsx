import MUAK from "../public/muak.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/muak.png" width={90} height={100} priority alt="logo" />
    </Link>
  );
};

export default Logo;
