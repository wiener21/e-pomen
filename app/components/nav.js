import Link from "next/link"
import Image from 'next/image'
import Dropdown from "./dropdown"

function Nav() {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Dropdown></Dropdown>
          <Link href="/" className="">
            <Image
              src="/e_pomen_logo_2_big.png"
              width={200}
              height={50}
              alt="E-Pomen logo"
            />
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex"> */}
          {/* <ul className="menu menu-horizontal px-1"> */}
            {/* <li><Link href="/">Početna</Link></li> */}
            {/* <li><Link href="/o-nama">O nama</Link></li> */}
          {/* </ul> */}
        {/* </div> */}
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li><Link href="/">Početna</Link></li>
            <li><Link href="/o-nama">O nama</Link></li>
            <li><Link href="/uslovi-koriscenja">Uslovi korišćenja</Link></li>
          </ul>
            <Link className="btn" href="/nova-objava">Nova Objava +</Link>
        </div>
      </div>
    )
}

export default Nav