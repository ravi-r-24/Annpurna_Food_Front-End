const navbar = {
  brandIcon: {
    url: "https://i.imgur.com/hxFqzgc.jpg",
  },
  navitems: [
    {
      id: 1,
      text: "Home",
      path: "/",
      children: [],
    },
    {
      id: 2,
      text: "About",
      path: "about",
      children: [],
    },
    {
      id: 3,
      text: "Famous Cuisines",
      path: "/famous-cuisines",
      children: [
        {
          id: 11,
          parentId: 3,
          type: "Indian",
          grandChildren: [
            "Chana Masala",
            "Tofu Masala",
            "Baigan Bharta",
            "Dal Tarka",
          ],
        },
        {
          id: 12,
          parentId: 3,
          type: "Mediterranean Cuisine",
          grandChildren: ["Falafel", "Hummus", "Tabbouleh", "Baba Ganoush"],
        },
        {
          id: 13,
          parentId: 3,
          type: "Middle Eastern",
          grandChildren: ["Mujadara", "Dolma", "Fattoush"],
        },
        {
          id: 14,
          parentId: 3,
          type: "East Asian",
          grandChildren: [
            "Vegetable Sushi",
            "Mapo Tofu",
            "Stir Fried Vegetables",
          ],
        },
        {
          id: 15,
          parentId: 3,
          type: "Maxican",
          grandChildren: ["Vegetable Tacos", "Guacamole", "Salsa"],
        },
        {
          id: 16,
          parentId: 3,
          type: "Ethiopian",
          grandChildren: ["Injera", "Misir Wat", "Shiro"],
        },
        {
          id: 17,
          parentId: 3,
          type: "Thai",
          grandChildren: ["Green Curry", "Pad Thai", "Tom Yum Soup"],
        },
        {
          id: 18,
          parentId: 3,
          type: "Italian",
          grandChildren: ["Pasta Primavera", "Marinara Sauce", "Brushchetta"],
        },
      ],
    },
  ],
};

export default navbar;
