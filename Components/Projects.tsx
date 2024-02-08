import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">YECTOS</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <a
            href="https://football-quiz-bogdan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/footballquiz1.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                ⚽ Test de Fútbol ⚽
              </div>
            </div>
          </a>
        </div>

        <div data-aos="fade-up">
          <a
            href="https://kanban-app-bogdan.netlify.app//"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/kanban1.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                📃 Metodología Kanban 📃
              </div>
            </div>
          </a>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://movies-app-bogdan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/film.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                🎬 Estrenos de Películas (API) 🎬
              </div>
            </div>
          </a>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://vet-app-bogdan.netlify.app//"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/vet.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                🐾 Vet : Gestión Pacientes 🐾
              </div>
            </div>
          </a>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://es.linkedin.com/in/bogdan-mitrache-bb0781247/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/construccion.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                ⌛ En construcción... ⌛
              </div>
            </div>
          </a>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://es.linkedin.com/in/bogdan-mitrache-bb0781247/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/images/construccion1.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white py-2 text-center">
                ⌛ En construcción... ⌛
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
