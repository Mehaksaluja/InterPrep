import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={38} height={32} />
          <h3 className="text-primary-100">InterPrep</h3>
        </Link>
      </nav>
      {children}
    </div>
  );
};
export default RootLayout;
