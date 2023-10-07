import { Router } from 'express';
import { CidadesController } from '../controllers/CidadesController';

let router: Router = Router();

let cidadesController: CidadesController = new CidadesController();

router.get('/cidades', cidadesController.list);

router.get('/cidades/:id', cidadesController.find);

router.post('/cidades', cidadesController.create);

router.put('/cidades/:id', cidadesController.update);

router.delete('/cidades/:id', cidadesController.delete);

export default router;
