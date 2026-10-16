"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
  <Image src="/images/logo.svg" alt="TravelTrucks" width={138} height={24} priority />
</Link>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href="/" className={pathname === "/" ? css.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={pathname.startsWith("/catalog") ? css.active : ""}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}