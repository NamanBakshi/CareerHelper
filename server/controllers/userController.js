const jwt=require("jsonwebtoken")

const logoutController=async (req,res)=>{
    try {
                      //name of cookie
        res.clearCookie("token", {
        domain: ["localhost:5173","render.com","netlify.com"],
        httpOnly: true,
        });
        //res.Cookies.Clear()
        res.clearCookie("token")
        res.status(200).json("Logged out successfully");
      } catch (err) {
        res.status(500).json(err);
      }
}

const getProfileController=(req,res)=>{
    const { token } = req.cookies;
    jwt.verify(token, process.env.SECRET, {}, (err, info) => {
      if (err) {
        res.status(401).json("Not authorized");
      }
      //console.log("info= "+JSON.stringify(info))
      res.json(info);
    
    })
}

module.exports={logoutController,getProfileController}