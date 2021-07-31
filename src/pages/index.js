import FooterSection from '@components/FooterSection';
import HelloSection from '@components/HelloSection';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import LocationSection from '@components/LocationSection';
import WeddingSection from '@components/WeddingSection';
import WelcomeSection from '@components/WelcomeSection';
import getQueryValue from '@helpers/getQueryValue';
import Invitations from 'data/invitations';
import { object } from 'prop-types';
import React, { Fragment, useState } from 'react';
// import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const invitationCode = decodeURIComponent(getQueryValue(location, 'invitation_code') || '');
  const isAnonymGuest = invitationCode === '';
  const invitedPeople = Invitations.find(v => v.id === invitationCode)

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection invitedPeople={
          invitedPeople || {
            name: "Opps sorry, you are not in list"
          }} />
        <WeddingSection />
        <LocationSection />
        <FooterSection isAnonymGuest={isAnonymGuest} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        location={location}
        invitedPeople={
          invitedPeople || {
            name: "Opps sorry, you are not in list"
          }
        }
        isAnonymGuest={isAnonymGuest}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      {/* <FloatingMusic /> */}
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
