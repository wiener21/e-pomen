'use client'
import Link from "next/link";

function Dropdown() {
    const handleClick = () => {
        const elem = document.activeElement;
        if(elem){
          elem?.blur();
        }
    };
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={handleClick} ><Link href="/">Početna</Link></li>
                <li onClick={handleClick}><Link href="/o-nama">O nama</Link></li>
                <li onClick={handleClick}><Link href="/uslovi-koriscenja">Uslovi korisćenja</Link></li>
                {/* <li tabIndex={0}>
                <a className="justify-between">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li> */}
                {/* <li><a>Cenovnik</a></li> */}
                <li><a>Kontakt</a></li>
            </ul>
            </div>
    )
}

export default Dropdown


