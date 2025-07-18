import { configureStore, createSlice } from '@reduxjs/toolkit';
import { util } from './utils/main';
import { ETheme } from './interfacesAndEnums/enums';
import { IThemeStyles } from './interfacesAndEnums/interfaces';
import { languageSlice } from './language';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const iconsSlice = createSlice({
  name: 'icons',
  initialState: { lib: 'bs' },
  reducers: {
    setIcons: (state, action) => {
      state.lib = action.payload;
    },
  },
});

const themeFromCookie = util.getCookie('theme');
const initialTheme = themeFromCookie || ETheme.LIGHT;

const themeStyles: IThemeStyles = {
  [ETheme.DARK]: {
    '--dataColorLight': '#000',
    '--dataColorDark': '#fff',
    '--dataColorLightMain': '#d7d6ef',
    '--dataColorLightSecond': '#e0e5f1',
    '--dataColorDarkMain': '#312b72',
    '--dataColorDarkSecond': '#89A0ED',
    '--dataColorAccent': '#807dcc',
    '--dataColorGray': '#e0e5f1ff',
  },
  [ETheme.LIGHT]: {
    '--dataColorLight': '#fff',
    '--dataColorDark': '#222d4a',
    '--dataColorLightMain': '#ffd2b9',
    '--dataColorLightSecond': '#ffeeee',
    '--dataColorDarkMain': '#ff7957',
    '--dataColorDarkSecond': '#c58269',
    '--dataColorAccent': '#ff3a20',
    '--dataColorGray': '#e0e5f1ff',
  },
};

const changeTheme = (theme) => {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key as string, value as string);
  });
};

changeTheme(themeStyles[initialTheme]);

const themeSlice = createSlice({
  name: 'theme',
  initialState: { name: initialTheme },
  reducers: {
    setTheme: (state, action) => {
      state.name = action.payload;
      let themeVariables = {};
      util.setCookie('theme', action.payload, { 'max-age': 3600, path: '/' });

      console.log('themeVariables', action.payload, themeVariables);
      changeTheme(themeStyles[action.payload]);
    },
  },
});

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    modals: {},
  },
  reducers: {
    openModal: (state, action) => {
      const modalToOpen = action.payload;
      console.log('openModal', modalToOpen);
      // Закриваємо всі
      Object.keys(state.modals).forEach((key) => {
        state.modals[key] = 'closed';
      });
      // Відкриваємо поточну
      state.modals[modalToOpen] = 'open';
    },
    closeModal: (state, action) => {
      const modalToClose = action.payload;
      state.modals[modalToClose] = 'closed';
    },
    setModalState: (state, action) => {
      const { key, status } = action.payload;
      state.modals[key] = status;
    },
  },
});

export const { openModal, closeModal, setModalState } = modalsSlice.actions;
export const { increment, decrement } = counterSlice.actions;
export const { setTheme } = themeSlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setIcons } = iconsSlice.actions;

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    icons: iconsSlice.reducer,
    modals: modalsSlice.reducer,
  },
});
