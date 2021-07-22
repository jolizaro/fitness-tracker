const router = require("express").Router();
const Workout = require("../../models/workoutModel.js");
const dayjs = require("dayjs");

router.post("/workouts", (req, res) => {
  console.log(req.body);
  Workout.create(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "workout not created",
      });
    });
});
router.put("/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $inc: {
        totalDuration: req.body.duration,
      },
      $push: {
        exercises: req.body,
      },
    }
  )
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "exericise not added",
      });
    });
});

router.get("/workouts/", (req, res) => {
  console.log(req.body);
  Workout.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "No workouts found",
      });
    });
});
router.get("/workouts/range", (req, res) => {
  console.log(req.body);
  const today = dayjs().add(1, 'day').format("YYYY-MM-DD");
  const sevenDaysAgo = dayjs().subtract(7, "day").format("YYYY-MM-DD");
  console.log(today);
  console.log(sevenDaysAgo);
  Workout.find({
    day: {
      $gte: new Date(sevenDaysAgo),
      $lt: new Date(today),
    },
  })
    .sort({ day: "asc" })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "No workouts found",
      });
    });
});
module.exports = router;
