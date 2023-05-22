const express = require("express");
const router = express.Router();

// databse import
const {Restaurants,Menus} = require("../Database/Database______");


router.get("/restaurants", (req, res) => {
  res.json(Restaurants);
});

router.get("/restaurant/:id", (req, res) => {
  const { id } = req.params;

  const keyToSearch = parseInt(id);
  let foundMenu = null;

  for (const obj of Menus) {
    if (obj.hasOwnProperty(keyToSearch)) {
         // if has own propery then save it's value
        foundMenu = obj[keyToSearch];
      break;
    }
  }

  // if menus not found
  if (!foundMenu) {
    return res.status(404).json({ message: "Menus not found" });
  }

  res.json(foundMenu);
});


// Export the router
module.exports = router;