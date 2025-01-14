import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  return (
    useGSAP(() => {
      gsap.to("#title", { opacity: 1, duration: 1, y: 0 });
      gsap.to(".link", { opacity: 1, duration: 1, y: 0, stagger: 0.25 });
    }, []),
    (
      <section
        id="highlights"
        className="w-screen overflow-hidden h-full common-padding bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="screen-max-witdh">
          <div className="mb-12 md:flex w-full items-end justify-between">
            <h1 id="title" className="section-heading">
              Text to Image
            </h1>
            <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                Watch the film
                <img src={watchImg} alt="" className="ml-2" />
              </p>
              <p className="link">
                Watch the event
                <img src={rightImg} alt="" className="ml-2" />
              </p>
            </div>
          </div>

          <VideoCarousel />
        </div>
      </section>
    )
  );
};

export default Highlights;
