import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
  console.log("hello")
});

// router.get('/:id',);

// router.post('/',);

// router.delete('/:id',);

// router.patch('/:id', );

export default router;
