import { useEffect } from "react";
import Typed from "typed.js";
import "../assets/Intro.css";

function Intro() {
  useEffect(() => {
    const options1 = {
      strings: ["Hola guys,It's Srijan!"],
      typeSpeed: 40,
      showCursor: false,
      onComplete: (self) => {
        self.el.classList.remove("typing-animation");
      },
    };

    const options2 = {
      strings: ["Welcome to my Portfolio"],
      typeSpeed: 50,
      showCursor: false,
      onComplete: (self) => {
        self.el.classList.remove("typing-animation");
      },
    };

    const typed1 = new Typed(".typing-animation1", options1);
    const typed2 = new Typed(".typing-animation2", options2);

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <div className="Intro p-10 flex justify-center min-h-full">
      <div className="fixed-card-size xl:w-[40vw] xl:h-[32vh] h-auto w-auto p-16 pt-12 lg:flex-row shadow-custom-white rounded-lg bg-gradient-to-br from-slate-600 to-black text-xl text-slate-100">
        <h4 className="flex justify-center text-6xl leading-2 p-2 md:ml-0 lg:mb-4 typing-animation font-Brettley-Signature lg:text-6xl lg:text-left">
          <span className="typing-animation1"></span>
        </h4>

        {/* <script>
            var stylesheet = "https://www.testdome.com/content/certificates/embed.css";
            link = document.createElement("link");
            link.href = stylesheet;
            link.type = "text/css";
            link.rel = "stylesheet";
            link.media = "screen,print";
            document.getElementsByTagName("head")[0].appendChild(link);
        </script> */}
        <h6 className="flex justify-center leading-2 text-4xl typing-animation font-dm-serif lg:text-4xl lg:text-left text-center whitespace-normal break-words">
          <span className="typing-animation2">
            Welcome to <br className="block lg:hidden" /> my Portfolio
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Intro;
