import {Router} from 'express';
import * as asyncHandler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    res.send('NOT IMPLEMENTED: example API').status(200);
  })
);

export default router;
