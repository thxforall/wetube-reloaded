export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log Out");
export const edit = (req, res) => {
  return res.send(`Edit User #${req.params.id}`);
};
export const see = (req, res) => {
  return res.send(`See User #${req.params.id}`);
};
export const deleteUser = (req, res) => {
  console.log(req.params);
  return res.send(`Delete User #${req.params.id}`);
};
