import './AuthSignUp.scss';

import { memo, useRef } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test_DeveloperSignUpSignInImage from '../../assets/Test_DeveloperSignUp&SignInImage.png'
// import { UseFetch } from '../../Components';

let url = 'https://jsonplaceholder.typicode.com/posts'
function AuthSignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(info);
  };

  return (

    <div className="login__wrapper d-flex ">
      <div width={'100%'}>
        <img src={Test_DeveloperSignUpSignInImage} className='pl-5 mx-0 loginImage' alt="loginImage" />
      </div>
      <form className='w-25 m-auto d-flex justify-content-between align-items-center'
        onSubmit={handleSubmit}
      >
        <label className='ml-5 ' htmlFor="email">IVV</label>
        <input
          className="form-control  ml-5 "
          type="email"
          required
          ref={emailRef}
          placeholder="Enter your login"
          id="email"
        />
        <label className='ml-5 ' htmlFor="password">VIIB Boshqarmasi</label>
        <input
          className="form-control ml-5 my-4"
          type="text"
          placeholder="Enter your login"
          aria-label="Search"
          required
          ref={passwordRef}
          id="password"
        />
        <label className='ml-5 ' htmlFor="password">Tuman IIBo’lim</label>
        <input
          className="form-control ml-5 my-4"
          type="text"
          placeholder="Enter your login"
          aria-label="Search"
          required
          ref={passwordRef}
          id="password"
        />
        <label className='ml-5 ' htmlFor="password">Login</label>
        <input
          className="form-control ml-5 my-4"
          type="text"
          placeholder="Enter your login"
          aria-label="Search"
          required
          ref={passwordRef}
          id="password"
        />
        <label className='ml-5 ' htmlFor="password">Password</label>
        <input
          className="form-control ml-5 my-4"
          type="text"
          placeholder="Enter your login"
          aria-label="Search"
          required
          ref={passwordRef}
          id="password"
        />
        <button className="btn btn-primary" type="submit">
          Kirish
        </button>
      </form>
    </div>

  );
}
export default memo(AuthSignUp)