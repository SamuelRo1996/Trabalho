import { Request, Response } from 'express';
import { Produto } from '../models/Produto';
import { Categoria } from '../models/Categoria';

export class ProdutosController {

  async list (req: Request, res: Response): Promise<Response> {
    let produtos: Produto[] = await Produto.find();

    return res.status(200).json(produtos);
  }

  async find (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let produto: Produto|null = await Produto.findOneBy({ id });
    if (! produto) {
      return res.status(422).json({ error: 'Produto não encontrado!' });
    }

    return res.status(200).json(produto);
  }

  async create (req: Request, res: Response): Promise<Response> {
    let body = req.body;

    console.log(body);

    let produto: Produto = await Produto.create({
      nome: body.nome,
      categoria_id: body.categoria_id,
    }).save();

    return res.status(200).json(produto);
  }

  async update (req: Request, res: Response): Promise<Response> {
    let body = req.body;
    let id = Number(req.params.id);

    let produto: Produto|null = await Produto.findOneBy({ id });
    if (! produto) {
      return res.status(422).json({ error: 'Produto não encontrado!' });
    }

    produto.nome = body.nome;
    produto.categoria_id = body.categoria_id;
    await produto.save();

    return res.status(200).json(produto);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    let id = Number(req.params.id);

    let produto: Produto|null = await Produto.findOneBy({ id });
    if (! produto) {
      return res.status(422).json({ error: 'Produto não encontrado!' });
    }

    produto.remove();

    return res.status(200).json();
  }

}