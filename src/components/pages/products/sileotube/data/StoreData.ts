import { icons } from "@/src/assets";

const StoreData = [
    {
      storeName: "Edge",
      url: "https://microsoftedge.microsoft.com/addons/detail/sileotube/oabppnponkdokefoaonmgeohlpoehjbc",
      icon: icons.social.EdgeIcon,
      iconAlt: "Edge Icon",
      versionInfo: "for Edge 39+",
    },
    {
      storeName: "Chrome",
      url: "https://chromewebstore.google.com/detail/sileotube/bhfcmnkoingoonlliebcokmpnpnhpgcc",
      icon: icons.social.ChromeIcon,
      iconAlt: "Chrome Icon",
      versionInfo: "for Chrome 50+",
    },
    {
      storeName: "Safari",
      url: "",
      icon: icons.social.SafariIcon,
      iconAlt: "Safari Icon",
      // versionInfo: "for Safari 15+",
      versionInfo: "Coming Soon",
    },
    {
      storeName: "Firefox",
      url: "",
      icon: icons.social.FirefoxIcon,
      iconAlt: "Firefox Icon",
      // versionInfo: "for Firefox 100+",
      versionInfo: "Coming Soon",
    },
  ]

export default StoreData;