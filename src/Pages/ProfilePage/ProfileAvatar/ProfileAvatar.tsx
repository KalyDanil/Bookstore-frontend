import { avatarUploadAction, uploadAvatarRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { ProfileAvatarStyle } from './ProfileAvatar.styled';

const ProfileAvatar: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imageName = e.target.files[0].name;
      dispatch(avatarUploadAction(e.target.files[0].name));
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = async () => {
        const image = fileReader.result;
        const body = {
          image,
          imageName,
        };
        await dispatch(uploadAvatarRequest(body));
        window.location.reload();
      };
    }
  };

  return (
    <ProfileAvatarStyle>
      <img className="profile__avatar-default" src={`http://localhost:4000/uploads/${user.avatar}`} alt="defaultAvatar" />
      <div className="profile__avatar-loadDiv">
        <input type="file" id="input__file" className="profile__avatar-load" accept=".png, .jpg, .jpeg, .svg" onChange={uploadAvatar} multiple />
        <label htmlFor="input__file">
          <img className="profile__avatar-camera" src="./assets/image/camera.svg" alt="Выбрать файл" />
        </label>
      </div>
    </ProfileAvatarStyle>
  );
};

export default ProfileAvatar;
