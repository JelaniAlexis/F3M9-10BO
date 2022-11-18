import NavElementTypes from "../enums/NavElementTypes"

const CollectionNavbar = [
    {
        name: "Collectie",
        currentPage: true,
        elementType: NavElementTypes.Anchor,
        location: "",
        cta: false,
    },
    {
        name: "Backlog",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "",
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
        name: "Uitloggen",
        currentPage: false,
        elementType: NavElementTypes.Link,
        location: "/",
        cta: false,
    },
    {
        name: "Delen",
        currentPage: false,
        elementType: NavElementTypes.Anchor,
        location: "",
        cta: true,
    },
]
export default CollectionNavbar;