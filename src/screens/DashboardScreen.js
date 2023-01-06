import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLogOut} from '../redux/slices/loginSlice';
import {getDriversService} from '../services/driversServices';

const DashboardScreen = () => {
  const [drivers, setDrivers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = await getDriversService();
      setDrivers(result);
    })();
  }, []);

  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: '#FFF',
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {drivers.map(
          ({
            name,
            age,
            country,
            phone,
            gender,
            id,
            license_expiry,
            license_type,
          }) => {
            return (
              <View
                style={{
                  backgroundColor: '#DAF7A6',
                  marginVertical: 20,
                  padding: 10,
                  width: '100%',
                }}>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{age}</Text>
                <Text>{country}</Text>
                <Text>{gender}</Text>
                <Text>{id}</Text>
                <Text>{license_expiry}</Text>
                <Text>{license_type}</Text>
              </View>
            );
          },
        )}

        <TouchableOpacity
          style={{
            backgroundColor: '#900C3F',
            paddingHorizontal: 50,
            paddingVertical: 15,
            margin: 10,
          }}
          onPress={() => dispatch(setLogOut())}>
          <Text style={{color: 'white'}}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
