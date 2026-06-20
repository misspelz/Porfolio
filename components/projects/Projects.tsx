"use client";

import bt from "@/public/assets/betatenant.jpeg";
import abs from "@/public/assets/edu.png";
import hage from "@/public/assets/hage.png";
import shulioo from "@/public/assets/shulioo.png";
import ant from "@/public/assets/ant.png";
import fr from "@/public/assets/fr.png";
import ca from "@/public/assets/ca.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";;

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 const projectData = [
  {
    image: ca,
    title: "ColloAfrica",
    description:
      "ColloAfrica is a financial services platform building wealth and prosperity for African communities. I am engineering the client and admin applications, implementing the MGR investment tool to simplify wealth management.",
    link: "https://colloafrica.com",
  },
  {
    image: abs,
    title: "Edustipend",
    description:
      "Edustipend supports 600+ learners through educational stipends, laptop assistance, and structured donations. I built accessible interfaces, implemented reusable components in Storybook, and created donation flows connecting supporters with students across Nigeria.",
    link: "https://edustipend.org",
  },
  {
    image: shulioo,
    title: "Shulioo",
    description:
      "Shulioo is a no-code portfolio builder for tech professionals. I redesigned the landing page for better conversions, built customizable portfolio templates, integrated payment processing for premium features, and refactored the codebase for performance and stability.",
    link: "https://shulioo.com/",
  },
  {
    image: hage,
    title: "Hage",
    description:
      "Hage simplifies cross-border shipping across Africa by connecting traders with reliable logistics providers. I am implementing intuitive shipping workflows and real-time tracking interfaces to make trade faster, more transparent, and more efficient.",
    link: "https://www.tryhage.com/",
  },
  {
    image: bt,
    title: "Beta Tenant",
    description:
      "Beta Tenant helps users discover the perfect rental home with ease. I translated Figma designs into responsive components, implemented real-time chat for tenant-landlord communication, built core property workflows, and integrated secure payment processing.",
    link: "https://betatenant.com/",
  },
  {
    image: ant,
    title: "Anthyx",
    description:
      "Anthyx is the branding and marketing workspace for teams who run brands seriously. I am implementing responsive dashboards that surface strategy, content, campaigns, competitive intelligence, and analytics in one place.",
    link: "https://app.useanthyx.com/",
  },
  {
    image: fr,
    title: "Frankly",
    description:
      "Frankly gives teams a safe, anonymous space to speak honestly. I built fast, intuitive feedback interfaces that help teams hear the real problems before they become expensive ones.",
    link: "https://frankly-lime.vercel.app/",
  },
];

  return (
    <div className="w-10/12 mx-auto lg:flex lg:flex-col lg:items-center ">
      <div className="flex flex-col gap-4 w-[90%] lg:w-[70%] mx-auto justify-center items-center">
        <h1 className=" text-3xl  font-bold">Projects</h1>
        <p className="pt-6 text-neutral-300 max-w-[1200px] mx-auto text-center">
          I actively develop web applications, solving problems and tackling
          projects ranging from one-page sites to comprehensive multi-page
          platforms. The projects below demonstrate my skills, adaptability, and
          focus on delivering efficient, high-quality solutions.
        </p>
      </div>

      <div className="mt-20 w-10/12 max-w-[1200px] mx-auto ">
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index}>
              <div className="my-10 md:w-10/12 mx-[10px] md:mx-auto">
                <Image
                  className="rounded-xl opacity-90 hover:opacity-100 w-[400px] h-[200px] object-cover"
                  src={project.image}
                  alt={project.title}
                />

                <div className="my-10 md:w-[100%] mx-auto">
                  <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                  <div className="text-neutral-300">
                    <h3 className="mt-4">{project.description}</h3>
                  </div>

                  <div className="mt-6 inline-block">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
                    >
                      Explore <BsArrowUpRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
