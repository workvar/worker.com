import { pages } from "@/src/assets";

const AppShowcaseItems = [
    {
      photo: pages.products.SileoTube.landingPage,
      alt: "Landing page screenshot",
      title: "Clean Landing Page",
      description: [
        "YouTube is an amazing learning tool, but its recommendation system is too good. You will be distracted.",
        "Introducing minimal landing page with a search bar, you won't get tempted to watch another cat video."
      ],
      photoDesktopPosition: "left",
    },
    {
      photo: pages.products.SileoTube.watchPage,
      alt: "Watch page screenshot",
      title: "Mindful Watch Page",
      description: [
        "Watching videos is still distracting when you have endless recommendations on the side.",
        "SileoTube removes all the recommendations and puts your video where it should be, in the center of your view."
      ],
      photoDesktopPosition: "right",
    },
    {
      photo: pages.products.SileoTube.shortsPage,
      alt: "Shorts page screenshot",
      title: "Shorts? No!",
      description: [
        "You do not want your YouTube to be another mindless doom-scrolling apocalypse. ",
        "SileoTube removes shorts recommendations from everywhere and blocks shorts page if you accidentally click it."
      ],
      photoDesktopPosition: "left",
    },
  ];

export default AppShowcaseItems;