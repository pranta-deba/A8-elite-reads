import { toast } from "react-toastify";

export const getRead = () => {
  const readData = localStorage.getItem("read");
  if (readData) {
    return JSON.parse(readData);
  }
  return [];
};

export const getWishlist = () => {
  const wishlistData = localStorage.getItem("wishlist");
  if (wishlistData) {
    return JSON.parse(wishlistData);
  }
  return [];
};

export const setRead = (id) => {
  const readOldData = getRead();
  const exits = readOldData.find((item) => item == id);
  if (!exits) {
    readOldData.push(id);
    localStorage.setItem("read", JSON.stringify(readOldData));
    toast.success("book added to read list")
  } else {
    toast.error("you have already read this books");
  }
};

export const setWishlist = (id) => {
  const readOldData = getRead();
  const wishlistOldData = getWishlist();
  const exitsRead = readOldData.find((item) => item == id);
  const exitsWishlist = wishlistOldData.find((item) => item == id);
  if(!exitsRead && !exitsWishlist){
    wishlistOldData.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistOldData));
    toast.success("books added to wishlist")
  }else{
    toast.error("you have already added to wishlist")
  }
};

export const getThemes = () => {
  const readTheme = localStorage.getItem("theme");
  if (readTheme) {
    return readTheme;
  }
  return "";
}
export const setThemes = (theme) => {
  localStorage.setItem('theme', theme);
}
