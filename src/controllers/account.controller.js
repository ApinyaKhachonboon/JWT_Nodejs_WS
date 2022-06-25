const accountService = require('../services/account.service')

exports.register = async (req, res) => res.status(201).json(await accountService.register(req.body, req.file));

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const token = await accountService.login(username, password);
    if(!token) {
        res.status(401).json()
        return;
    }
    res.status(200).json({token});
}

/// stateless ////
exports.info = (req, res) => res.json({username: req.sub, role: req.role})