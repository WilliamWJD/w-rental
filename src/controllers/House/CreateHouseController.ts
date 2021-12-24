import { Request, Response } from "express";
import { CreateHouseService } from "../../services/House/CreateHouseService";

const createHouseService = new CreateHouseService();

class CreateHouseController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, description, value, state, address, district, city, num } = req.body

            const house = await createHouseService.execute({
                name,
                description,
                value,
                state,
                address,
                district,
                city,
                num,
                user_id: req.user.id
            });

            return res.status(201).json(house);
        } catch (err: any) {
            return res.status(401).json({ error:err.message })
        }
    }
}

export { CreateHouseController }