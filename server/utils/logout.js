const logoutHandler = (req, res) => {
  try {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(201).send({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(421).send({ message: "Logout failed" });
  }
};

module.exports = logoutHandler;
