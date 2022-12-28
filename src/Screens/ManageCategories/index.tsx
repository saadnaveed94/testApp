/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import MyIcon from '../../assets/MyIcon.svg';
import {
  DrawerActions,
} from '@react-navigation/native';
import { Card, TextInput, Button } from 'react-native-paper';
import type { RootState } from '../../store/store';

import { useSelector, useDispatch } from 'react-redux';
import { addField, saveCategory, deleteField } from '../../slice/featureslice';
import { Picker } from '@react-native-picker/picker';

function ManageCategories({ navigation }: any) {

  async function toggleDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const categories = useSelector((state: RootState) => state.counter.categories);
  const dispatch = useDispatch();
  const [label, setLabel] = React.useState<string>('');
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  function onPressAdd() {
    dispatch(saveCategory({
      name: `new Category ${categories.length + 1}`, id: categories.length + 1, fields: [{ type: '', value: '' }], items: [],
    } as any));
  }

  function onFieldAdd(val: any, position: any) {
    dispatch(addField({ val, position } as any));
  }

  function FieldGetter(type: any) {
    if (type === 'checkbox') {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.itemContainerLabel}>
            <TextInput placeholder="Add Text" style={styles.itemInput} />
          </View>
          <View style={styles.itemLabelContainer}>
            <Text>Checkbox</Text>
          </View>
        </View>
      );
    } else if (type === 'text') {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.itemContainerLabel}>
            <TextInput placeholder="Add Text" style={styles.itemInput} />
          </View>
          <View style={styles.itemLabelContainer}>
            <Text>Text</Text>
          </View>
        </View>
      );
    } else if (type === 'date') {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.itemContainerLabel}>
            <TextInput placeholder="Add Text" style={styles.itemInput} />
          </View>
          <View style={styles.itemLabelContainer}>
            <Text>Date</Text>
          </View>
        </View>
      );
    } else if (type === 'number') {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.itemContainerLabel}>
            <TextInput placeholder="Add Text" style={styles.itemInput} />
          </View>
          <View style={styles.itemLabelContainer}>
            <Text>Number</Text>
          </View>
        </View>
      );
    }
  }

  function onChangeLabels(text: any) {
    if (isEdit) {
      setLabel(text);
    }
  }

  function deleteCategory(position: any) {
    dispatch(deleteField({ position } as any));
  }

  return (
    <View>
      <Header centerText="Categories" leftIcon={<MyIcon height={40} width={40} onPress={() => { toggleDrawer(); }} />} />
      <View style={styles.container}>
        <Button mode="contained" onPress={onPressAdd}>
          Add New Category
        </Button>
        <ScrollView style={styles.scrollStyles}>
          <View style={styles.scrollInnerContainer}>
            <View style={styles.itemInput}>
              {
                categories.map((item: any, index) => {
                  return (
                    <Card style={styles.card}>
                      <Text style={styles.newCategoryLabel}>New Category</Text>
                      <View style={styles.newCategoryLabels}>
                        <TextInput
                          style={styles.inputStyles}
                          label="New Category"
                          value={item.name}
                          onChangeText={text => onChangeLabels(text)}
                        />
                        {/* <Button onPress={() => setIsEdit(!isEdit)}>{isEdit ? 'save' : 'edit'}</Button> */}
                      </View>
                      {item.fields.map(({ type, value }) => FieldGetter(type, value))}
                      < View style={styles.addFieldContainer}>
                        <Text>Add Field</Text>
                        <Picker mode="dropdown" style={styles.pickerStyles} onValueChange={(val) => onFieldAdd(val, index)}
                        >
                          <Picker.Item label="" value="" />
                          <Picker.Item label="Text" value="text" />
                          <Picker.Item label="Checkbox" value="checkbox" />
                          <Picker.Item label="Date" value="date" />
                          <Picker.Item label="Number" value="number" />
                        </Picker>
                        <Button onPress={() => { deleteCategory(item); }} style={styles.removeStyles} mode="contained">
                          Remove
                        </Button>
                      </View>
                    </Card>
                  );
                })
              }
            </View>
          </View>
        </ScrollView>
      </View >
    </View >
  );
}

export default ManageCategories;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  itemContainerLabel: {
    width: '80%',
  },
  card: {
    width: '100%',
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  scrollInnerContainer: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 200,
  },
  newCategoryLabel: {
    marginLeft: 10,
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  scrollStyles: {
    width: '100%',
    marginTop: 10,
  },
  inputStyles: {
    width: '80%',
  },
  itemInput: {
    width: '100%',
  },
  itemLabelContainer: {
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  newCategoryLabels: {
    display: 'flex', flexDirection: 'row',
  },
  addFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  pickerStyles: { width: 40 },
  removeStyles: { width: '40%' },
});

