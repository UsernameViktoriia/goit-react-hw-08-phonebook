import { Image, TitlePage } from './HomePage.styled';

const Home = () => {
  return (
    <>
      <TitlePage>
        Welcome to PHONEBOOK! You can create your own phone book and use it.
        Let`s start
      </TitlePage>
      <Image
        src="https://thumbs.dreamstime.com/b/hand-holding-cell-phone-contacts-people-concept-choose-person-contact-list-phonebook-icon-group-call-friend-80588571.jpg"
        alt="communication"
      />
    </>
  );
};

export default Home;
