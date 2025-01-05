function TestimonialInfo({ label1, value1, label2, value2 }) {
  return (
    <div className="flex flex-row mx-4">
      <div className="flex flex-col w-1/2 mb-5">
        <div className="text-gray-400 text-xs font-semibold">{label1}</div>
        <div className="text-smoke text-sm">{value1}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-400 text-xs font-semibold">{label2}</div>
        <div className="text-smoke text-sm">{value2}</div>
      </div>
      <div></div>
    </div>
  );
}

export default TestimonialInfo;
