import { Link } from "react-router-dom";
import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI · Internship",
    date: "Jul 2024 - Present · 2 mos",
    details: [
      "As Headstarter Al Software Engineering fellow I will be building 5 Al projects in 5 weeks and and as my final project with an accepted pr from an open source community,<br/>",

     " The part am most excited about this fellowship is I will be able to build my <br/> 1) Vision <br/> 2) Personal brand <br/> 3) Interview prep <br/> 4) Network <br/> 5) Project",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Growwr · Contract",
    date: "Mar 2024 - Apr 2024 · 2 mos",
    details: [
      "<span style='color: white;'>Developed and enhanced </span>existing projects, optimizing functionality and user experience",
      "<span style='color: white;'>Designed and implemented </span> a new webpage for the company website, aligning with brand standards and business objectives.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
      "<span style='color: white;'>Managed updates and maintenance</span> for the company website, ensuring seamless operation and timely content updates.",

    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "TNL Esports · Start-Up",
    date: "Feb 2024 - Mar 2024 · 2 mos",
    details: [
      "<span style='color: white;'> Spearheaded the creation of a comprehensive Task Assignment system to optimize project management and task allocation processes.</span>",
      "<span style='color: white;'> Developed and implemented </span> a robust Core Planner, facilitating efficient organization of project timelines and task scheduling.",

      "<span style='color: white;'>Played a pivotal role in enhancing the recruitment process by designing and implementing a Recruitment system, streamlining candidate selection and onboarding procedures.",
    ],
  },
  {
    title: "Web Content Writer",
    company_name: "Charpoka",
    date: "May 2016 - Dec 2018 · 2 yrs 8 mos",
    details: [
      "Developed content, including blogs and web posts, for Charpoka",
      "Played a key role in creating engaging and informative material.",
      "Ensured consistency and quality across all content produced.",
    ],
  },
];

const portfolio = [
  {
    name: "ElaraBriefify - AI Based Article Summarizer",
    description:
      "ElaraBriefify, an innovative AI-based application developed by me, revolutionizes the way we consume information. With ElaraBriefify, users can effortlessly condense lengthy news articles and website content into concise summaries, providing quick access to key insights and saving valuable time. Whether you're staying updated on current events or researching various topics, ElaraBriefify streamlines the process, offering clarity and efficiency in information digestion. Experience the power of summarization with ElaraBriefify today.",
    image: oscs,
  },
  {
    name: "Elara Travels",
    description:
      "A Full Stack Travel Agency Website, Features: Home section, Available Service section and Booking section , User can book and cancel their trip., Login System with capcha feature., User can pay with their cards, Admin can Update Tour details, Admin can see the total payment ,  Admin and User has their separate dashboard, Admin can assign user to become new admin , User can manage their trips  Technologies: React , Tailwind CSS, MongoDB, Express, Stripe, Swiper.Js, Node.JsAuthentication :, Firebase, JSON web Token",
    image: devnotes,
  },
  {
    name: "PHero-Arena",
    description:
      "PHero-Arena is one of my most favorite projects, which is a gaming company website created with React, Node, JavaScript, Express, MongoDB Server, and authenticated by the Firebase Login System.",
    image: algorithms,
  },
];

export { experiences, portfolio };

