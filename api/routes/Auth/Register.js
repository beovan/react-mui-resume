app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // Save user to the database with hashedPassword
        // ...
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});