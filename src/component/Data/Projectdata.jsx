import pasteImage from "../../assets/paste.PNG";
import ecommerceImage from "../../assets/ecommerce.PNG";
import weatherImage from "../../assets/weather.PNG";
import tripImage from "../../assets/trip.PNG";
const projectData = [
  {
    id: 1,

    title: "AI Trip Planner",

    description:
      " An AI-powered trip planner that creates personalized itineraries based on user preferences.",

    image: tripImage,

    link: "https://ai-trip-taker-r8b51pa3e-izzahs-projects-d7addee6.vercel.app/",
    tech: ["React", "tailwind css", "firebase", "shadcn", "Gemini API"],
    code: "https://github.com/Izzah-Salam/AI_TripTaker",
  },

  {
    id: 2,

    title: "Paste Website",

    description:
      " A web application that allows users to create paste, update, delete, View and share text snippets easily.",
    image: pasteImage,

    link: "https://pasto-website.vercel.app/",
    tech: ["React", "tailwind css", "ReduxToolkit", "react-router"],
    code: "https://github.com/Izzah-Salam/Pasto_Website",
  },
  {
    id: 3,

    title: "Woody Ecommerce Website",

    description:
      " A web application that provides real-time weather updates and forecasts hourly and weekly for any location.",

    image: ecommerceImage,

    link: "https://woody-ecommerce-website-ptb8.vercel.app/",
    tech: ["React", "tailwind css", "ReduxToolkit", "react-router"],

    code: "https://github.com/Izzah-Salam/Woody-Ecommerce-Website",
  },

  {
    id: 4,

    title: "Weather App",

    description:
      " An e-commerce website for selling furniture having a Cart and checkout system.",

    image: weatherImage,

    link: "https://izzah-weather-app-nu-two-99.vercel.app/",
    tech: ["React", "tailwind css", "TanStack Query", "API"],
    code: "https://github.com/Izzah-Salam/Weather-App",
  },
];

export default projectData;
