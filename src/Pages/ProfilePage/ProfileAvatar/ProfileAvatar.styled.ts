import styled from 'styled-components';

export const ProfileAvatarStyle = styled.form`
    position: absolute;
    width: 305px;
    height: 305px;
    background: #F0F4EF;
    border-radius: 16px;
    margin-left: 5.5%;
    margin-top: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 255px;
        height: 255px;
        margin-left: 1.7%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: relative;
        width: 290px;
        height: 290px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 110px;
    }

.profile__avatar-default {
    width: 100%;
    height: 100%;
}

.profile__avatar-camera {
   position: absolute;
   width: 48px;
   height: 48px;
   top: 237px;
    left: 237px;
   @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 40px;
        height: 40px;
        top: 200px;
        left: 200px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 40px;
        height: 40px;
        top: 230px;
        left: 230px;
    }
}

.profile__avatar-load {
    opacity: 0;
    visibility: hidden;
}
`;
