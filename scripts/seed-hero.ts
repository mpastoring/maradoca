import { adminClient } from "../lib/sanity.admin";

const heroData = {
  _id: "hero-main",
  _type: "hero",
  title: "MARADOCA",
  subtitle:
    "Embark on a journey of freedom through melodic, tropical, and cosmic sounds.",
  backgroundVideo: {
    desktop: "maradoca/2014_09_27_charles-bronson_2e10a1",
    mobile: "maradoca/2014_09_27_charles-bronson-vertical",
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/maradoca",
      icon: "Instagram",
    },
    {
      platform: "soundcloud",
      url: "https://soundcloud.com/maradoca",
      icon: "/soundcloud.svg",
    },
    {
      platform: "email",
      url: "mailto:maradoca.music@gmail.com",
      icon: "Mail",
    },
  ],
};

async function seedHero() {
  try {
    await adminClient.createIfNotExists(heroData);
    console.log("✅ Hero data seeded successfully");
  } catch (error) {
    console.error("Error seeding hero data:", error);
  }
}

seedHero();
