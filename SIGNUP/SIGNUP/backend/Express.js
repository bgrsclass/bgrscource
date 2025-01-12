// Example backend route for fetching user data
app.get('/api/user', async (req, res) => {
  try {
    // Assume the user ID is available in the request, for example, from a JWT or session
    const userId = req.user.id;
    const user = await db.query('SELECT name, email, password FROM users WHERE id = ?', [userId]);
    if (user.length > 0) {
      res.json(user[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
