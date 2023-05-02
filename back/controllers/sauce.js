const {
  json
} = require("body-parser");
const Sauce = require("../models/sauce");
const fs = require('fs');

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject.id;
  const sauce = new Sauce({
    ...sauceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: []

  });

  sauce.save()
    .then(() => {
      res.status(201).json({
        message: 'Sauce enregistrée !'
      })
    })
    .catch(error => {
      res.status(400).json({
        error
      })
    })

};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    })
    .then(sauce => res.status(200).json(sauce))
    .catch(error =>
      res.status(404).json({
        error
      }));
};

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ? {
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {
    ...req.body
  };
  delete sauceObject._userId;
  Sauce.findOne({
      _id: req.params.id
    })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({
          message: 'Not authorized'
        });
      } else if (!req.body.sauce) {
        Sauce.updateOne({
            _id: req.params.id
          }, {
            ...sauceObject,
            _id: req.params.id
          })
          .then(() => res.status(200).json({
            message: 'Sauce modifiée!'
          }))
          .catch(error => res.status(401).json({
            error
          }));
      } else {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.updateOne({
              _id: req.params.id
            }, {
              ...sauceObject,
              _id: req.params.id
            })

            .then(() => res.status(200).json({
              message: 'Sauce modifiée!'
            }))
            .catch(error => res.status(401).json({
              error
            }));
        });
      }
    })
}

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    })
    .then(sauce => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({
          message: 'Not authorized'
        });
      } else {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({
              _id: req.params.id
            })
            .then(() => {
              res.status(200).json({
                message: 'Sauce supprimée !'
              })
            })
            .catch(error => res.status(401).json({
              error
            }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error
      });
    });
};

exports.getAllSauces = (req, res, next) => {
  Sauce.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.rateSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    })
    .then((sauce) => {

      if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1 ) {
        //sauce.usersLiked.push(sauce.userId);
        //sauce.likes = sauce.usersLiked.length;
        Sauce.updateOne({
            "_id": req.params.id
          }, /*{ ...req.body, _id: req.params.id})*/ {
            $push: {
              usersLiked: req.body.userId
            },
            $inc: {
              likes: 1
            }
          })


          .then(() => res.status(202).json({
            message: "L'utilisateur "+req.body.userId+ " aime la sauce"


          }))

          .catch(error => res.status(400).json({
            error
          }));

      } else if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0 ) {
        Sauce.updateOne({
          "_id": req.params.id
        },  {
          $pull: {
            usersLiked: req.body.userId
          },
          $inc: {
            likes: -1
          }
        })


        .then(() => res.status(202).json({
          message: "L'utilisateur "+req.body.userId+ " n'aime plus la sauce"


        }))

        .catch(error => res.status(400).json({
          error
        }));
      }
    })


    .catch(error => {
      res.status(500).json({
        error
      });
    })
}