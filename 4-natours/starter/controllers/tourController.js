const fs = require('fs');
const path = require('path');

const toursJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..','dev-data', 'data', 'tours.json')));

exports.getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({data: toursJson, status: "OK", results: toursJson.length});
}

exports.getTour = (req, res) => {
    res.status(200).json({data: toursJson, status: "OK", results: toursJson.length});
}

exports.createTour = (req, res) => {
    res.status(201).json({data: "Created"});
}

exports.updateTour = (req, res) => {
    res.status(200).json({data: "updated"});
}
exports.deleteTour = (req, res) => {
    res.status(204).json({data: "Deleted"});
}