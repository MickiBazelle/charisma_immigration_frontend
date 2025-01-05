import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PopupModal } from "react-calendly";

function BookASessionButton() {
  const [isCalendlyModalOpen, setCalendlyModalOpen] = useState(false);

  const navigate = useNavigate();
  const handleClick = (e) => {
    
    setCalendlyModalOpen(!isCalendlyModalOpen);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="mt-24 mb-16 gap-1 justify-center items-center w-[156px] h-[48px] leading-6 text-white whitespace-nowrap rounded-xl  shadow-sm bg-gradient-to-tr from-brightViolet via-blueLotus to-neonBlue border-1 border-purpleShadeBush border-solid max-md:mt-10 "
      >
        Book A Session
      </button>
      {
        <PopupModal
          url="https://calendly.com/charismaimmigrationprojects"
          pageSettings={{
            backgroundColor: "#ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "#00a2ff",
            textColor: "#4d5055",
          }}
          styles={{ height: "1000px", fontSize: "16px" }}
          rootElement={document.getElementById("root")}
          onModalClose={() => setCalendlyModalOpen(false)}
          open={isCalendlyModalOpen}
        />
      }
    </div>
  );
}

export default BookASessionButton;
