import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {setLogOut} from '../redux/slices/loginSlice';
import {
  createDriverService,
  deleteDriverByIDService,
  getDriversService,
} from '../services/driversServices';
import NeoCardLayout from '../components/NeoDriverCardLayout';
import UI_Container from '../components/UI_Container';
import NeoButtonLayout from '../components/NeoButtonLayout';
import Label from '../components/Label';
import NeoInputLayout from '../components/NeoInputLayout';
import Logo from '../components/Logo';
import DriverTab from '../components/DriverTab';
import PassengerTab from '../components/PassengerTab';

const DashboardScreen = () => {
  const [drivers, setDrivers] = useState([]);
  const [driverName, setDriverName] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [openGenderDropDown, setOpenGenderDropDown] = useState(false);
  const [genderOptions, setGenderOptions] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  const [openLicenseTypeDropDown, setOpenLicenseTypeDropDown] = useState(false);
  const [licenseTypeOptions, setLicenseTypeOptions] = useState([
    {label: 'Two Wheeler', value: 'Two Wheeler'},
    {label: 'Four Wheeler', value: 'Four Wheeler'},
  ]);
  const [licenseExpiry, setLicenseExpiry] = useState('');
  const [driverPhone, setDriverPhone] = useState('');
  const [driverCountry, setDriverCountry] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetDrivers();
  }, []);

  const handleGetDrivers = async () => {
    const result = await getDriversService();
    setDrivers(result);
  };

  const handleCreateDriver = async () => {
    const options = {
      name: driverName,
      gender,
      license_type: licenseType,
      age: Number(age),
      license_expiry: licenseExpiry,
      phone: driverPhone,
      country: driverCountry,
    };

    const result = await createDriverService(options);

    if (!result?.name) {
      Alert.alert('Something went wrong!!!');
    } else {
      handleGetDrivers();
    }
  };

  const handleDeleteDriver = async ID => {
    await deleteDriverByIDService(ID);

    handleGetDrivers();
  };

  return (
    <UI_Container>
      <Logo />

      <View style={[styles.flexCenter, styles.tab]}>
        <NeoButtonLayout
          title={'Drivers'}
          width={'40%'}
          onPress={() => setSelectedTab(0)}
        />
        <NeoButtonLayout
          title={'Passengers'}
          width={'40%'}
          onPress={() => setSelectedTab(1)}
        />
      </View>

      {selectedTab === 0 && <DriverTab />}
      {selectedTab === 1 && <PassengerTab />}

      <NeoButtonLayout
        title={'Sign out'}
        onPress={() => dispatch(setLogOut())}
      />
    </UI_Container>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#900C3F',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    height: 40,
    marginVertical: 20,
    padding: 10,
    fontSize: 18,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {flexDirection: 'row', justifyContent: 'space-around'},
});
