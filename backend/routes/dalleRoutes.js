import { Router } from "express";
import { PIXAZO_API_KEY } from "../config/env.js";


const router = Router();

router.route('/').post(async (req, res) => {

    const { prompt } = req.body;
    const PIXAZO_URL = "https://gateway.pixazo.ai/flux-1-schnell/v1/getData";

    if (!prompt) {
        return res.status(404).json({
            success: 'false',
            message: 'Prompt is required'
        })
    }

    try {

        const data = {
            prompt,
            num_steps: 4,
            seed: 15,
            height: 1024,
            width: 1024
        }

        const response = await fetch(PIXAZO_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Ocp-Apim-Subscription-Key": PIXAZO_API_KEY
            },
            body: JSON.stringify(data)
        });

        const imageUrl = await response.json();

        res.status(201).json({
            success: true,
            photo: imageUrl.output
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).send(error.error);
    }
});

export default router;