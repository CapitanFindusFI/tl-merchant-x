import express, { NextFunction, Request, Response } from 'express';
import Logger from '../lib/logger';
import pokedex from '../services/pokedex';

const service = pokedex();
const logger = Logger.getLogger().child({
    controller: "pokemon"
});


const router = express.Router();

router.get(
    "/:name",
    async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.params;
        logger.debug(`Obtaining informations for pokemon: ${name}`);
        try {
            const response = await service.getPokemon(name);
            return res.status(200).send(response);
        } catch (e) {
            logger.error(e);
            next(e);
        }
    }
);

export default router;