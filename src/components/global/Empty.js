function Empty({ message, description, icon }) {
  return (
    <div>
      <i class="icon nav-icon" data-eva={icon}></i>
      <p>{message}</p>
      <p>{description}</p>
    </div>
  );
}

export default Empty;
