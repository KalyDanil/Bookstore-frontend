import { Profile } from './Profile.styled';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import Password from '../Password/Password';

const ProfilePage: React.FC = () => {
  return (
    <Profile>
      <ProfileAvatar />
      <PersonalInformation />
      <Password />
    </Profile>
  );
};

export default ProfilePage;
