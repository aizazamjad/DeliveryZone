import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  createDriverService,
  deleteDriverByIDService,
  getDriversService,
} from '../services/driversServices';
import NeoDriverCardLayout from './NeoDriverCardLayout';
import NeoButtonLayout from '../components/NeoButtonLayout';
import Label from '../components/Label';
import NeoInputLayout from '../components/NeoInputLayout';

const DriverTab = () => {
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
    <>
      <Label text={'Add New Driver!'} />

      <Label text={'Name:'} />

      <NeoInputLayout
        style={styles.input}
        value={driverName}
        onChangeText={setDriverName}
      />

      <Label text={'Gender:'} />

      <DropDownPicker
        open={openGenderDropDown}
        value={gender}
        items={genderOptions}
        setOpen={setOpenGenderDropDown}
        setValue={setGender}
        setItems={setGenderOptions}
      />

      <Label text={'Age:'} />

      <NeoInputLayout
        type={'number-pad'}
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />

      <Label text={'Country:'} />

      <NeoInputLayout
        style={styles.input}
        value={driverCountry}
        onChangeText={setDriverCountry}
      />

      <Label text={'Phone'} />

      <NeoInputLayout
        type={'phone-pad'}
        style={styles.input}
        value={driverPhone}
        onChangeText={setDriverPhone}
      />

      <Label text={'License Expiry'} />

      <NeoInputLayout
        style={styles.input}
        value={licenseExpiry}
        onChangeText={setLicenseExpiry}
        placeholder={'yyyy-mm-dd'}
      />

      <Label text={'License Type:'} />

      <DropDownPicker
        open={openLicenseTypeDropDown}
        value={licenseType}
        items={licenseTypeOptions}
        setOpen={setOpenLicenseTypeDropDown}
        setValue={setLicenseType}
        setItems={setLicenseTypeOptions}
      />

      <NeoButtonLayout title={'Submit'} onPress={handleCreateDriver} />

      <Label text={'Drivers:'} />

      {drivers?.reverse()?.map(({id, name, country, phone}) => {
        return (
          <NeoDriverCardLayout
            key={id}
            ID={id}
            name={name}
            country={country}
            phone={phone}
            handleDeleteDriver={handleDeleteDriver}
          />
        );
      })}

      {!drivers?.length && <Label text={'No Drivers Found!'} />}
    </>
  );
};

export default DriverTab;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 20,
    padding: 10,
    fontSize: 18,
  },
});
