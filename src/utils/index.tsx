/**
 * John => JO
 * John1 => JO
 * John 1 => J1
 * John Doe => JD
 * John Doe Smith => JS
 * John Doe Tylor Smith => JS
 * @param {string} name
 * @param fallback
 */
const getNameInitials = (name: string, fallback = "") => {
  if (name) {
    return name
      ?.match(/(^\S\S?|\b\S)?/g)
      ?.join("")
      ?.match(/(^\S|\S$)?/g)
      ?.join("")
      .toUpperCase();
  }
  return fallback;
};

export {getNameInitials};
