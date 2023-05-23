exports.checkUser = (req, res, next) => {
  if (!req.name) return res.status(404).json({ message: 'Error' });
  next();
};

exports.getAllUsers = (req, res) => {
  res.status(500).json({ data: 'Not created' });
};

exports.getUser = (req, res) => {
  res.status(200).json({ data: 'OK' });
};

exports.createUser = (req, res) => {
  res.status(201).json({ data: 'Created' });
};

exports.updateUser = (req, res) => {
  res.status(200).json({ data: 'updated' });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({ data: 'Deleted' });
};
