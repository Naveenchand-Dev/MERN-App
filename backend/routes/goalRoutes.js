const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deletGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

router.route("/:id").put(protect, updateGoal).delete(protect, deletGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deletGoal);

module.exports = router;
