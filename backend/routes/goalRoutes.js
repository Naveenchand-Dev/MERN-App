const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deletGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

router.route("/:id").put(updateGoal).delete(deletGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deletGoal);

module.exports = router;
