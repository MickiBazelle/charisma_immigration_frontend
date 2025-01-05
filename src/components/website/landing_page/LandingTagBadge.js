// TagBadge reusable component
const LandingTagBadge = ({ text, textColor, bgColor, borderColor }) => {
  return (
    <div
      className={`px-2.5 py-0.5 my-auto text-sm font-medium leading-5 text-center rounded-full border ${textColor} ${bgColor} ${borderColor}`}
    >
      {text}
    </div>
  );
};

export default LandingTagBadge;
