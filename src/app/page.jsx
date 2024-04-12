"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3>Welcome to homepage</h3>
        <hr className="m-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
          quibusdam doloremque aspernatur delectus hic asperiores sit iste nobis
          ipsam possimus animi quidem ad ipsum quae, recusandae iure optio
          praesentium.
        </p>
      </div>
    </main>
  );
}
