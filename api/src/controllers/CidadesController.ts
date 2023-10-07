import { Request, Response } from 'express';
import { Cidade } from '../models/Cidade';


export class CidadesController {

  async list (req: Request, res: Response): Promise<Response> {
    let cidades: Cidade[] = await Cidade.find();

    return res.status(200).json(cidades);
  }

  async find (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let cidade: Cidade|null = await Cidade.findOneBy({ id });
    if (! cidade) {
      return res.status(422).json({ error: 'Cidade não encontrada!' });
    }

    return res.status(200).json(cidade);
  }

  async create (req: Request, res: Response): Promise<Response> {
    let body = req.body;

    console.log(body);

    let cidade: Cidade = await Cidade.create({
      nome: body.nome,
    }).save();

    return res.status(200).json(cidade);
  }

  async update (req: Request, res: Response): Promise<Response> {
    let body = req.body;
    let id = Number(req.params.id);

    let cidade: Cidade|null = await Cidade.findOneBy({ id });
    if (! cidade) {
      return res.status(422).json({ error: 'Cidade não encontrada!' });
    }

    cidade.nome = body.nome;

    await cidade.save();

    return res.status(200).json(cidade);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let cidade: Cidade|null = await Cidade.findOneBy({ id });
    if (! cidade) {
      return res.status(422).json({ error: 'Cidade não encontrada!' });
    }

    cidade.remove();

    return res.status(200).json();
  }

}
