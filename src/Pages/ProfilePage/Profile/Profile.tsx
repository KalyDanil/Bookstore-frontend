import { Profile } from './Profile.styled';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import PersonalInformation from '../PersonalInformation/PersonalInformation';

const ProfilePage: React.FC = () => {
  return (
    <Profile>
      <ProfileAvatar />
      <PersonalInformation />
    </Profile>
  );
};

export default ProfilePage;
