import NavElementTypes from "../enums/NavElementTypes"

const HomeNavbar = [
    {
        name: "Over",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "#over",
        cta: false,
    },
    {
        name: "Features",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "#features",
        cta: false,
    },
    {
        name: "Prijs",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "#prijs",
        cta: false,
    },
    {
        name: "Contact",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "#contact",
        cta: false,
    },
    {
        name: "Log in",
        currentPage: false,
        elementType: NavElementTypes.Link,
        location: "/collection",
        cta: true,
    },
]
export default HomeNavbar