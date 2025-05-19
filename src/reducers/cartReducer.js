export default function cartReducer(cart, action) {
  switch (action.type) {
    case 'add-to-cart': {
      return [
        ...cart,
        {
          ...action.payload,
          inCart: true,
        },
      ];
    }

    case 'remove-from-cart': {
      return cart.filter((item) => item.id !== action.payload.id);
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
