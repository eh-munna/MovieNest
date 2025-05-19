export default function themeReducer(darkMode, action) {
  switch (action.type) {
    case 'dark': {
      return darkMode === true;
    }

    case 'toggle': {
      return darkMode === false;
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
