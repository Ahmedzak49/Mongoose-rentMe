const Property = require('../models/property');
const Comment = require('../models/comment');
module.exports = {
    index,
    new: newProperty,
    create,
    show,
    detail,
    delete: deleteProperty,
}

function index(req, res) {
    Property.find({}, function(err, properties) {
        res.render('properties/index', { title: 'All Properties', properties });
    });
}

function newProperty(req, res) {
    res.render('properties/new');
}

function detail(req, res) {
  const { title, description, price, location } = req.body;
  const newProperty = { title, description, price, location };
  res.render('properties/detail', { property: newProperty });
}

function create(req, res) {
    req.body.owner = req.user._id;
    Property.create(req.body, function(err) {
        if (err) return res.render('properties/new');
        res.redirect('/properties');
    });
}

function show(req, res) {
    Property.findById(req.params.id, function(err, property) {
        res.render('properties/show', { property });
    });
}

function deleteProperty(req, res) {
    Property.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/properties');
    });
}
