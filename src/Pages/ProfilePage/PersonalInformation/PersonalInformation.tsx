import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { editRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { editInfoShape } from '../../../utils/schemas/user';
import { InfoForm } from './PersonalInformation.styled';

const PersonalInformation: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [informationIsEditing, setinformationIsEditing] = useState(false);
  const startToEditInformation = () => {
    setinformationIsEditing(!informationIsEditing);
  };
  const emailErr = (user.emailErr).map((item, index) => {
    return (<p className="emailErr" key={index}>{item}</p>);
  });

  return (
    <div>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
        }}
        validationSchema={editInfoShape}
        onSubmit={(values) => {
          const newInformation = {
            fullName: values.fullName,
            email: values.email,
          };
          dispatch(editRequest(newInformation));
        }}
      >
        {({ handleChange, handleSubmit, errors, values, isSubmitting }) => (
          // eslint-disable-next-line
        <InfoForm onSubmit={handleSubmit} informationIsEditing={informationIsEditing} emailIsWrong={user.emailIsWrong} emailValidation={errors.email}>
          <div className="personalInformation__header">
            <h1>Personal information</h1>
            <span onClick={startToEditInformation}>Change information</span>
          </div>
          <div className="personalInformation__div">
            <span>Your name</span>
            <img src="./assets/image/profileYourName.svg" alt="yourName" />
            <input className="personalInformation__inputText" type="text" value={user.fullName} readOnly />
          </div>
          <div className="personalInformation__div">
            <span>Your email</span>
            <img src="./assets/image/email.svg" alt="yourEmail" />
            <input className="personalInformation__inputText" type="text" value={user.email} readOnly />
            <input className="personalInformation__button" type="button" value="Confirm" />
          </div>
          <div className="personalInformationEditing__div">
            <span>Your name</span>
            <img src="./assets/image/profileYourName.svg" alt="yourName" />
            <input className="personalInformation__inputText" name="fullName" type="text" onChange={handleChange} value={values.fullName} />
          </div>
          <div className="personalInformationEditing__div">
            <span>Your email</span>
            <img src="./assets/image/email.svg" alt="yourEmail" />
            <input className="personalInformation__inputText emailEdit" name="email" type="text" onChange={handleChange} value={values.email} />
            <ErrorMessage name="email" className="emailErr" component="div" />
            {emailErr}
            <input className="personalInformation__button" type="submit" disabled={isSubmitting} value="Confirm" />
          </div>
        </InfoForm>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
