/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import MyIcon from '../../assets/MyIcon.svg';
import {
  DrawerActions,
} from '@react-navigation/native';
import { Button, TextInput, Card, Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addItemInFields } from '../../slice/featureslice';
import type { RootState } from '../../store/store';
import RNDateTimePicker from '@react-native-community/datetimepicker';

function Home({ navigation, route }: any) {
  async function toggleDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  const categories = useSelector((state: RootState) => state.counter.categories);
  const dispatch = useDispatch();

  function onFieldAdd() {
    dispatch(addItemInFields({ position: route.params.name.id } as any));
  }


  const filtered = categories.filter((item) => item.id === route.params.name.id);

  const [show, setShow] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(new Date().toString());
  function InnerFieldGetter(type: any) {

    console.log(type);
    if (type === 'text') {
      return (
        <View>
          <TextInput placeholder="Text" />
        </View>
      );
    }
    if (type === 'number') {
      return (
        <View>
          <TextInput placeholder="Number" keyboardType="numeric" />
        </View>
      );
    }
    if (type === 'date') {
      return (
        <View>
          <TouchableOpacity onPress={() => (setShow(true))}>
            <Text>{value}</Text>
          </TouchableOpacity>
          {show && <RNDateTimePicker display="spinner" value={new Date()} onChange={(event: any, date: Date) => { setValue(date.toString()); }} />}
        </View>
      );
    }
    if (type === 'checkbox') {
      return (
        <View style={styles.checkBoxStyles}>
          <Switch />
        </View>
      );
    }
  }

  function FieldGetter() {
    return (<>
      {
        filtered[0].fields.map((items) => {
          return (
            <View >
              <Text style={styles.fieldGetterStyle}>{items.type === '' ? 'Unnamed Field' : items.value}</Text>
              {InnerFieldGetter(items.type)}
            </View>
          );
        })
      }
    </>);
  }

  return (
    <View>
      <Header centerText={route.params.name.name} leftIcon={<MyIcon height={40} width={40} onPress={() => { toggleDrawer(); }} />} />
      <View style={styles.container}>
        <Button mode="contained" onPress={() => onFieldAdd()}>
          Add New Item
        </Button>
        <ScrollView style={styles.scrollStyles}>
          <View style={styles.scrollInnerContainer} >
            {
              filtered[0]?.items?.map(() => {
                return (
                  <Card style={styles.cardStyles}>
                    {FieldGetter()}
                  </Card>
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
  },
  scrollStyles: {
    width: '100%',
    marginTop: 10,
  },
  scrollInnerContainer: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 200,
  },
  checkBoxStyles: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  fieldGetterStyle: {
    fontWeight: '600',
    fontSize: 16,
  },
  cardStyles: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%',
    padding: 20,
    marginTop: 20,
  },
});
