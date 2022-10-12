import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const click = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar /> <div> {children} </div>
    </>
  );
};

export default Layout;
