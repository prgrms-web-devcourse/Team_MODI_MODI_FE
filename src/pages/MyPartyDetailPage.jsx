import PartyShareAccount from 'components/PartyShareAccount';
import { useCallback, useState } from 'react';

const MyPartyDetailPage = () => {
  const [fliped, setFliped] = useState(false);

  const handleFlipCard = useCallback(() => {
    setFliped(prev => !prev);
  }, []);

  return (
    <>
      <PartyShareAccount
        fliped={fliped}
        onFlipCard={handleFlipCard}
        sharedInfo={{
          sharedId: 'Modi@abc.com',
          sharedPassword: '12312314sdf',
        }}
      />
    </>
  );
};

export default MyPartyDetailPage;
