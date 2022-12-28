import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  categories: [
    {
      name: string;
      id: number;
      fields: any[];
      items: any[];
    },
  ];
}

const initialState: CounterState = {
  categories: [
    {
      name: 'Cars',
      id: 1,
      fields: [{type: '', value: ''}],
      items: [],
    },
  ],
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    saveCategory: (state, action: any) => {
      state.categories.push(action.payload);
    },
    addField: (state, action: any) => {
      const currentField = state.categories[action.payload.position] as any;
      currentField.fields.push({type: action.payload.val, value: ''});
      state.categories[action.payload.position] = currentField;
    },
    editField(state, action: any) {
      const currentField = state.categories[action.payload.position] as any;
      currentField.name = action.payload.text;
      state.categories[action.payload.position] = currentField;
    },
    addItemInFields(state, action: any) {
      let filtered = state.categories.filter(
        item => item.id === action.payload.position,
      );
      filtered[0].items.push(filtered[0].items.length + 1);
    },
    deleteField(state, action: any) {
      let filtered: any = state.categories.filter(function (el) {
        return el.id != action.payload.position.id;
      });
      state.categories = filtered;
    },
    deleteItemInFields(state, action: any) {
      let category = action.payload.categories[0];
      let arr = category.items.filter(item => item !== action.payload.position);
      let item = {
        fields: category.fields,
        id: category.id,
        items: arr,
        name: category.name,
      };
      const currentField = state.categories[item.id] as any;
      console.log(currentField);
    },
  },
});

export const {
  saveCategory,
  addField,
  editField,
  addItemInFields,
  deleteField,
  deleteItemInFields,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
