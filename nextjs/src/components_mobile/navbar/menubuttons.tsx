"use client";

// import { toggleMenu } from "@/redux/slices/togglemenu";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function MenuButton1() {
    // const m = document.getElementById("navbarmenumobile") as HTMLElement;
    // console.log(m);
    // const [menu, setMenu] = useState(m.style.display);
    // const dispatch = useDispatch();

    const openMenu = () => {
        // menu.style.animation = '';
        // setMenu('grid');
        // console.log(menu);
        // menu.style.animation = 'slideInLeft 0.3s ease 0s 1 normal forwards';
        const m = document.getElementById("navbarmenumobile") as HTMLElement;
        m.style.display = 'grid';
    };

    return (
        // <button onClick={() => {dispatch(toggleMenu('open'))}} className="my-auto" id="navbarmenubuttonmobile">
        <button onClick={() => openMenu()} className="my-auto" id="navbarmenubuttonmobile">
        {/* <button className="my-auto" id="navbarmenubuttonmobile"> */}
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="size-4" />
        </button>
    );
};

export function MenuButton2() {
    // const dispatch = useDispatch();

    const closeMenu = () => {
        const menu = document.getElementById("navbarmenumobile") as HTMLDivElement;
        menu.style.display = 'none';
        console.log(menu.style.display);
        // menu.style.animation = '';
        // menu.style.animation = 'slideInLeft 0.3s ease 0s 2 reverse forwards';
        // menu.style.animation = '';
    };

    return (
        // <button onClick={() => {dispatch(toggleMenu('close'))}} className="my-auto" id="navbarmenubutton2mobile">
        <button onClick={() => closeMenu()} className="my-auto" id="navbarmenubutton2mobile">
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="size-4" />
        </button>
    )
}