import express, { NextFunction, Request, Response } from 'express';
import { param, validationResult } from "express-validator";
import Logger from '../lib/logger';
import pokedex from '../services/pokedex';

const service = pokedex();
const logger = Logger.getLogger().child({
    controller: "pokemon"
});

const router = express.Router();
const validation = param("name").isString().trim().toLowerCase().notEmpty();

router.get(
    "/:name",
    validation,
    async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array());
        }

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