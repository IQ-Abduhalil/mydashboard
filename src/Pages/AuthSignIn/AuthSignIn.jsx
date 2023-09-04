import './AuthSignIn.scss';
import { memo, useRef, useState } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test_DeveloperSignUpSignInImage from '../../assets/Test_DeveloperSignUp&SignInImage.png'
import Fetch from '../../Components/UseFetch/UseFetch';


let Url = 'https://reqres.in/api/'
function AuthSignIn() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const [products, loading, error] = Fetch(`${Url}login`)
  console.log(products)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(Url,
          {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        let data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    // console.log(info);
  };

  return (

    <div className="login__wrapper d-flex ">
      <div>
        <img src={Test_DeveloperSignUpSignInImage} className='pl-5 mx-0 loginImage' alt="loginImage" />
      </div>
      <form className='w-25 m-auto '
        onSubmit={handleSubmit}
      >
        <label className='ml-5 ' htmlFor="email">Email</label>
        <input
          className="form-control  ml-5 "
          type="email"
          required
          ref={emailRef}
          placeholder="Email"
          id="email"
        />
        <label className='ml-5 ' htmlFor="password">Password</label>
        <input
          className="form-control ml-5 my-4"
          type="text"
          placeholder="Password"
          aria-label="Search"
          required
          ref={passwordRef}
          id="password"
        />
        <button className="btn btn-outline-success  ml-5" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
export default memo(AuthSignIn)