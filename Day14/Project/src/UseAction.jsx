import React from 'react';
import { useActionState } from 'react';

const handleLogin = async (prevState, formData) => {
  const name = formData.get('name');
  const password = formData.get('password');

  const regex = /^[A-Z0-9]{2,}$/;

  if (name.length > 5) {
    return { error: 'Name should not exceed 5 characters.' };
  } else if (!regex.test(password)) {
    return { error: 'Password must contain only capital letters and digits, at least 2 characters.' };
  }

  console.log('Form submitted');
  return { success: true };
};

const UseAction = () => {
  const [state, formAction, isPending] = useActionState(handleLogin, { error: null, success: false });

  return (
    <div>
      <h2>Validation with useActionState Hook in React</h2>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter name" />
        <br /><br />
        <input type="text" name="password" placeholder="Enter password" />
        <br /><br />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green' }}>Login Successful!</p>}
    </div>
  );
};

export default UseAction;