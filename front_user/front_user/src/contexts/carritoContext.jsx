import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CARRITO_STORAGE_KEY = 'cine-flow-carrito';

const CarritoContext = createContext(null);

export const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(CARRITO_STORAGE_KEY);
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch {
        window.localStorage.removeItem(CARRITO_STORAGE_KEY);
      }
    }
  }, []);

  const saveCart = useCallback((items) => {
    window.localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(items));
    setCartItems(items);
  }, []);

  const agregarAlCarrito = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, cantidad: 1 }];
      }

      saveCart(updatedItems);
      return updatedItems;
    });
  }, [saveCart]);

  const removerDelCarrito = useCallback((productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      saveCart(updatedItems);
      return updatedItems;
    });
  }, [saveCart]);

  const actualizarCantidad = useCallback((productId, cantidad) => {
    setCartItems((prevItems) => {
      if (cantidad <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }

      const updatedItems = prevItems.map((item) =>
        item.id === productId ? { ...item, cantidad } : item
      );
      saveCart(updatedItems);
      return updatedItems;
    });
  }, [saveCart]);

  const vaciarCarrito = useCallback(() => {
    window.localStorage.removeItem(CARRITO_STORAGE_KEY);
    setCartItems([]);
  }, []);

  const obtenerPrecioTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.cantidad, 0);
  }, [cartItems]);

  const obtenerCantidadTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  }, [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    agregarAlCarrito,
    removerDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    obtenerPrecioTotal,
    obtenerCantidadTotal,
  }), [agregarAlCarrito, cartItems, vaciarCarrito, obtenerCantidadTotal, obtenerPrecioTotal, removerDelCarrito, actualizarCantidad]);

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);

  if (!context) {
    throw new Error('useCarrito must be used within a CarritoProvider');
  }

  return context;
};
