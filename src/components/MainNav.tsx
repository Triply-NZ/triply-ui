import Link from "next/link";
import React from "react";
import Image from "next/image";
import ToggleMode from "./ToggleMode";

const MainNav = () =>{
    return (
    <div className="flex justify-between">
     <div className="flex items-center gap-2">
      <Link href="/" passHref>
      <Image src="/images/logo4-nobg.png" alt="Logo" width={100} height={50} style={{ cursor: "pointer" }} />
      </Link>
     </div>

     <div className="flex items-center gap-4">
        <Image src="/images/avatar.jpg" alt="Avatar" width={50} height={50} style={{ cursor: "pointer", borderRadius: "50%" }} />
        <span>Username</span>
        <ToggleMode />
     </div>
    </div>
  
    );
};

export default MainNav;