
export function authorizeModification(req, res, next) {
  const isParent = req.user?.role === "parent";
  const isChildOwner =
    req.user?.role === "child" &&
    String(req.params.userId) === String(req.user.id);

  if (!isParent && !isChildOwner) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}
