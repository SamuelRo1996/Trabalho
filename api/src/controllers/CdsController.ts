import { Request, Response } from 'express';
import { Cd } from '../models/Cd';
import { Cidade } from '../models/Cidade';

export class CdsController {

  async list (req: Request, res: Response): Promise<Response> {
    let cds: Cd[] = await Cd.find();

    return res.status(200).json(cds);
  }

  async find (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let cd: Cd|null = await Cd.findOneBy({ id });
    if (! cd) {
      return res.status(422).json({ error: 'CD não encontrado!' });
    }

    return res.status(200).json(cd);
  }

  async create (req: Request, res: Response): Promise<Response> {
    let body = req.body;

    console.log(body);

    let cd: Cd = await Cd.create({
      nome: body.nome,
      cidade_id: body.cidade_id,
    }).save();

    return res.status(200).json(cd);
  }

  async update (req: Request, res: Response): Promise<Response> {
    let body = req.body;
    let id = Number(req.params.id);

    let cd: Cd|null = await Cd.findOneBy({ id });
    if (! cd) {
      return res.status(422).json({ error: 'CD não encontrado!' });
    }

    cd.nome = body.nome;
    cd.cidade_id = body.cidade_id;
    await cd.save();

    return res.status(200).json(cd);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let cd: Cd|null = await Cd.findOneBy({ id });
    if (! cd) {
      return res.status(422).json({ error: 'CD não encontrado!' });
    }

    cd.remove();

    return res.status(200).json();
  }

}
