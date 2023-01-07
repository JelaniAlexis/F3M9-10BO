import { NavElement } from "../types/types";

const CollectionNavbar: NavElement[] = [
    {
        name: "Collectie",
        currentPage: true,
        elementType: "Anchor",
        location: "",
        cta: false,
    },
    {
        name: "Backlog",
        currentPage: false,
        elementType: "Anchor",
        location: "",
        cta: false,
    },
    {
        name: "Contact",
        currentPage: false,
        elementType: "Link",
        location: "/#contact",
        cta: false,
    },
    {
        name: "Uitloggen",
        currentPage: false,
        elementType: "Link",
        location: "/",
        cta: false,
    },
    {
        name: "Delen",
        currentPage: false,
        elementType: "Anchor",
        location: "",
        cta: true,
    },
]
export default CollectionNavbar;