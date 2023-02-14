const Comment = require('../models/comment');

module.exports = {
    deleteComment
};

function deleteComment(req, res) {
  Property.findById(req.params.id, function(err, property) {
    if (err) return res.status(500).send({ error: "Error finding property" });
    // check if the person attempting to delete the comment is the owner of the property
    if (property.owner._id.equals(req.user._id)) {
      // find the index of the comment to be deleted
      let commentIndex = property.comments.findIndex(comment => comment._id.equals(req.params.commentId));
      // remove the comment from the property's comments array
      property.comments.splice(commentIndex, 1);
      // save the updated property
      property.save(function(err) {
        if (err) return res.status(500).send({ error: "Error saving property" });
        // return a success message
        return res.status(200).send({ message: "Comment deleted successfully" });
      });
    } else {
      // return a error
      return res.status(403).send({ error: "You are not authorized to delete this comment" });
    }
  });
}
