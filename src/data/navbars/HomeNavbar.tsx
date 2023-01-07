import { NavElement } from "../types/types";

const HomeNavbar: NavElement[] = [
    {
        name: "Over",
        currentPage: false,
        elementType: "Anchor",
        location: "#over",
        cta: false,
    },
    {
        name: "Features",
        currentPage: false,
        elementType: "Anchor",
        location: "#features",
        cta: false,
    },
    {
        name: "Prijs",
        currentPage: false,
        elementType: "Anchor",
        location: "#prijs",
        cta: false,
    },
    {
        name: "Contact",
        currentPage: false,
        elementType: "Anchor",
        location: "#contact",
        cta: false,
    },
    {
        name: "Log in",
        currentPage: false,
        elementType: "Link",
        location: "/collection",
        cta: true,
    },
]
export default HomeNavbar