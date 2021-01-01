new Mmenu(document.querySelector("#menu"), {
    extensions: { all: ["theme-white", "pagedim-black"], "(max-width: 767px)": ["fx-menu-slide"] },
    counters: !0,
    iconPanels: { add: !0, hideDivider: !0, hideNavbar: !0, visible: "first" },
    navbar: { title: "Menu" },
    navbars: [{ position: "top", content: ["searchfield"] }, { position: "top" }],
    searchfield: {
        panel: {
            add: '!0',
            splash: "<p>What are you looking for?<br />Type the menu name you are looking for.</p>",
        },
    },
    setSelected: { hover: !0, parent: !0 },
    sidebar: { collapsed: { use: 768, hideNavbar: !0, hideDivider: !0 }, expanded: { use: 10440, initial: "remember" } },
});