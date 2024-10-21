import Logo from "../assets/img/foodVilla.png";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2 sm:w-20" alt="logo" src={Logo} />
    </a>
  );
};

export default Title;
