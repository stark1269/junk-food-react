const RegisterPage = () => {
  return (
    <form autoComplete='off'>
      <label>
        <span>Username</span>
        <input name="name" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type='password' name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  )
};

export default RegisterPage