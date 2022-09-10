import { Profile } from './Profile.styled';
import ProfileAvatar from '../ProfileAvatar';
import PersonalInformation from '../PersonalInformation';
import Password from '../Password';

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
