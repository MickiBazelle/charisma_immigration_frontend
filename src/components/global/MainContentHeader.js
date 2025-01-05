function MainContentHeader({ title, children }) {
  return (
    <div className="flex bg-ebonyClay justify-between mt-4 pb-3 border-b-1">
      <h1 className="text-smoke ml-2">{title}</h1>
      <div className="mr-5">{children}</div>
    </div>
  );
}

export default MainContentHeader;
