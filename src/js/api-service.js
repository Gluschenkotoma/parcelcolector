import shortid from "shortid";

export const addUser = (name) => {
  const user = {
    id: shortid.generate(),
    name,
  };
  console.log(user);
};
