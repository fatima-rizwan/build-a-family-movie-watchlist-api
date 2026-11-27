
import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorizeModification } from "../middleware/authorize.js";
import {
  getWatchlist,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../utils/db.js";

const router = express.Router();

router.use(authenticate);

// Get a user's watchlist
router.get("/:userId", (req, res) => {
  const watchlist = getWatchlist(req.params.userId);

  if (watchlist === null) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(watchlist);
});

// Add a movie
router.post(
  "/:userId/movies",
  authorizeModification,
  (req, res) => {
    const movie = addMovie(req.params.userId, req.body);

    if (!movie) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(201).json(movie);
  }
);

// Update a movie
router.put(
  "/:userId/movies/:movieId",
  authorizeModification,
  (req, res) => {
    const movie = updateMovie(
      req.params.userId,
      Number(req.params.movieId),
      req.body
    );

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(movie);
  }
);

// Delete a movie
router.delete(
  "/:userId/movies/:movieId",
  authorizeModification,
  (req, res) => {
    const deleted = deleteMovie(
      req.params.userId,
      Number(req.params.movieId)
    );

    if (!deleted) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  }
);

export default router;
