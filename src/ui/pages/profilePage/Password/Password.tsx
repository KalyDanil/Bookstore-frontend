import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { editPasswordRequest } from '../../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { editPasswordShape } from '../../../../utils/schemas/user';
import { PasswordForm } from './Password.styled';

const Password: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [newPasswordIsMaking, setnewPasswordIsMaking] = useState(false);

  const startToChangePassword = () => {
    setnewPasswordIsMaking(!newPasswordIsMaking);
  };

  const oldPasswordErr = (user.oldPasswordErr).map((item, index) => {
    return (<p className="passwordErr" key={index}>{item}</p>);
  });

  return (
    <div>
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          repeat: '',
        }}
        validationSchema={editPasswordShape}
        onSubmit={(values) => {
          const passwordBody = {
            password: values.password,
            oldPassword: values.oldPassword,
          };
          dispatch(editPasswordRequest(passwordBody));
        }}
      >
        {({ handleChange, handleSubmit, errors, values, isSubmitting }) => (
          // eslint-disable-next-line
        <PasswordForm onSubmit={handleSubmit} newPasswordIsMaking={newPasswordIsMaking} passwordValidation={errors.password} repeatValidation={errors.repeat} oldPasswordValidation={errors.oldPassword} oldPasswordIsWrong={user.oldPasswordIsWrong}>
          <div className="personalInformation__passwordHeader">
            <h1>Password</h1>
            <span onClick={startToChangePassword}>Change password</span>
          </div>
          <div className="personalInformation__oldPasswordStatic">
            <span className="personalInformation__password-text">Old password</span>
            <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
            <input className="personalInformation__inputText" type="password" value="blablablablablablablabla" readOnly />
          </div>
          <div className="personalInformation__oldPassword">
            <span className="personalInformation__password-text">Old password</span>
            <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
            <input className="personalInformation__inputText oldPassword" name="oldPassword" type="password" onChange={handleChange} value={values.oldPassword} />
            <ErrorMessage name="oldPassword" className="passwordErr" component="div" />
            {oldPasswordErr}
          </div>
          <div className="personalInformation__newPassword">
            <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
            <input type="password" className="newPassword" name="password" placeholder="Password replay" onChange={handleChange} value={values.password} />
            <span>Enter your password</span>
            <ErrorMessage name="password" className="passwordErr" component="div" />
          </div>
          <div className="personalInformation__newPassword">
            <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
            <input type="password" className="passwordRepeat" name="repeat" placeholder="Password replay" onChange={handleChange} value={values.repeat} />
            <span>Repeat your password without errors</span>
            <ErrorMessage name="repeat" className="passwordErr" component="div" />
          </div>
          <input className="personalInformation__passwordButton" type="submit" disabled={isSubmitting} value="Confirm" />
        </PasswordForm>
        )}
      </Formik>
    </div>
  );
};

export default Password;
