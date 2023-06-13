import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        <NavLink to='/login' >Login</NavLink>
        <br />
        <NavLink to='/register' >SingUp</NavLink>
        <br />
        <NavLink to='/rest' >Rest</NavLink>
      </div>
    </>
  )
};

export default HomePage