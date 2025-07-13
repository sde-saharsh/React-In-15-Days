import React, { useActionState } from 'react';

const UseAction = () => {
  const handleSubmit = async (previousData, formData) => {
    const name = formData.get('name');
    const password = formData.get('password');

    await new Promise(res => setTimeout(res, 2000)); // simulate delay
    console.log("function reached");

    if (name && password) {
      return {
        success: true,
        message: '✅ Data submitted successfully!',
        name,
        password
      };
    } else {
      return {
        success: false,
        message: '❌ Failed to submit data. Please fill all fields.'
      };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <form action={action}>
        <h3>🚀 useActionState Example</h3>

        <input type="text" placeholder='Enter name' name='name' />
        <br /><br />
        <input type="password" placeholder='Enter password' name='password' />
        <br /><br />

        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>

        <br /><br />

        {data && (
          <p style={{ color: data.success ? 'green' : 'red' }}>
            {data.message}
          </p>
        )}
      </form>

      {/* 👇 Submitted Data Display */}
      {data?.success && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <h4>📋 Submitted Details:</h4>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Password:</strong> {data.password}</p>
        </div>
      )}
    </div>
  );
};

export default UseAction;
