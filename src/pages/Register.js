import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <FormRow
          type='text'
          name='name'
          handleChange={handleChange}
          value={values.name}
        />
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          handleChange={handleChange}
          value={values.email}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          handleChange={handleChange}
          value={values.password}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
