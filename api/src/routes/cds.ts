import { Router } from 'express';
import { CdsController } from '../controllers/CdsController';

let router: Router = Router();

let cdsController: CdsController = new CdsController();

router.get('/cds', cdsController.list);

router.get('/cds/:id', cdsController.find);

router.post('/cds', cdsController.create);

router.put('/cds/:id', cdsController.update);

router.delete('/cds/:id', cdsController.delete);

export default router;
