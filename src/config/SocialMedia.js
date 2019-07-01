import facebook from "~/assets/social_Face.png";
import instagram from "~/assets/social_Insta.png";
import youtube from "~/assets/social_youtube.png";
import linkedin from "~/assets/social_LinkedIn.png";

export const SocialMedia = [
  {
    url: process.env.REACT_APP_FACEBOOK_URL,
    alt: "Facebook da Tesla",
    icon: facebook
  },
  {
    url: process.env.REACT_APP_INSTAGRAM_URL,
    alt: "Instagram da Tesla",
    icon: instagram
  },
  {
    url: process.env.REACT_APP_LINKEDIN_URL,
    alt: "LinkedIn da Tesla",
    icon: linkedin
  },
  {
    url: process.env.REACT_APP_YOUTUBE_URL,
    alt: "Canal no YouTube da Tesla",
    icon: youtube
  }
];
