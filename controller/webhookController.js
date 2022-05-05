const getAllUsers =  (req, res, next) => {
    const users = { status: "500"}
    res.status(200).json({
      users,
    });
}
  
module.exports = { getAllUsers }
