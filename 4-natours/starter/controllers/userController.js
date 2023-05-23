
exports.getAllUsers = (req, res) => {
    res.status(500).json({data: "Not created"});
}

exports.getUser = (req, res) => {
    res.status(200).json({data: "OK"});
}

exports.createUser = (req, res) => {
    res.status(201).json({data: "Created"});
}

exports.updateUser = (req, res) => {
    res.status(200).json({data: "updated"});
}
exports.deleteUser = (req, res) => {
    res.status(204).json({data: "Deleted"});
}