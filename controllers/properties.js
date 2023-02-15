const Property = require('../models/property');

function logDeleteRequest(req, res, next) {
    if (req.method === "DELETE") {
      console.log(`Received a DELETE request for ${req.url}`);
    }
    next();
  }

  module.exports = {
    index,
    new: newProperty,
    show,
    detail,
    create,
    delete: deleteProperty,
    logDeleteRequest
  };

function index(req, res) {
    Property.find({}, function(err, properties) {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        res.render('properties/index', { Title: 'All Properties', properties });
      }
    });
  }

function newProperty(req, res) {
    res.render('properties/new', {Title: 'Add a new Property'});
}

function detail(req, res) {
    Property.findById(req.params.id, function(err, property) {
      if (err || !property) {
        console.error(err);
        res.status(404).send('Property not found');
      } else {
        res.render('properties/show', { property, Title: "Properties Details" });
      }
    });
  }

function create(req, res) {
    req.body.owner = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    Property.create(req.body, function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.redirect('/properties');
        }
    });
}

function show(req, res) {
    Property.findById(req.params.id, function(err, property) {
        res.render('properties/show', { property, Title: "Properties Details" });
    });
}

function deleteProperty(req, res) {
    Property.findByIdAndRemove({_id: req.params.id, owner: req.user._id}, function(err) {

      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        res.redirect('/properties');
      }
    });
  }
