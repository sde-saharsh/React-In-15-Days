import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>👤 Profile Page</h2>
      <p>Welcome, <strong>{username}</strong>!</p>
    </div>
  );
};

export default Profile;
