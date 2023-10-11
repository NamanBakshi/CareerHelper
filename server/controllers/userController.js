const logoutController=async ()=>{
    try {
        res.clearCookie("token", {
          httpOnly: true, 
        });
        res.status(200).json("Logged out successfully");
      } catch (err) {
        res.status(500).json(err);
      }
}

module.exports={logoutController}