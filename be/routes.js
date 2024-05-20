import express from "express";
import mongodb from "mongodb";
const router = express.Router();

const client = mongodb.MongoClient;

// var uri = "mongodb://mongo/a-donde-ir";
const uri = "mongodb://mongo/dummy-app";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    status: true,
    msj: "Home",
  });
});

router.get("/data/from/db", function (req, res, next) {
  client.connect(uri, function (err, db) {
    if (err) return next(err);
    var collection = db.collection("dummy");
    collection.find({}).toArray(function (err, docs) {
      if (err) return next(err);
      return res.json(docs);
    });
  });
});
// router.post("/data/into/db", function (req, res, next) {
//   client.connect(uri, function (err, db) {
//     if (err) return next(err);
//     var collection = db.collection("dummy");
//     collection.insertMany(req.body, function (err, result) {
//       return res.json({ result: "success" });
//     });
//   });
// });

export default router;
