import React, {useCallback, useEffect, useState} from 'react';
import {getPassengersService} from '../services/passengerServices';
import Label from './Label';
import NeoButtonLayout from './NeoButtonLayout';
import NeoPassengerCardLayout from './NeoPassengerCardLayout';

const PassengerTab = () => {
  const [passengers, setPassengers] = useState([]);
  const [totalPages] = useState('init');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      totalPages === 'init' && handleGetPassengers();
      if (currentPage < totalPages) {
        await handleGetPassengers();
        return;
      }
    })();
  }, [currentPage, handleGetPassengers, totalPages]);

  const handleGetPassengers = useCallback(async () => {
    const result = await getPassengersService(currentPage);
    const localPassengers = passengers.length
      ? [...passengers, ...result?.data]
      : result?.data;
    setPassengers(localPassengers);
  }, [currentPage, passengers]);

  return (
    <>
      <Label text={'Passengers:'} />

      {passengers?.map(({_id, name, trips, airline}) => {
        return (
          <NeoPassengerCardLayout
            keyProp={_id}
            name={name}
            trips={trips}
            airline={airline}
          />
        );
      })}

      <NeoButtonLayout
        disabled={currentPage >= totalPages}
        title={'Load More!'}
        onPress={() =>
          setCurrentPage(
            currentPage !== totalPages ? currentPage + 1 : currentPage,
          )
        }
      />

      {!passengers?.length && <Label text={'No Passengers Found!'} />}
    </>
  );
};

export default PassengerTab;
