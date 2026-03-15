import { Router } from "express";
import { config } from "dotenv";

config({ path: "./.env" });

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

    if (!process.env.PIXAZO_API_KEY) {
        console.error("CRITICAL: PIXAZO_API_KEY is missing from environment variables!");
        return res.status(500).json({
            success: false,
            message: "Server configuration error"
        });
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
                "Ocp-Apim-Subscription-Key": process.env.PIXAZO_API_KEY.replace(/['"]+/g, '').trim()
            },
            body: JSON.stringify(data)
        });

        const imageUrl = await response.json();

        console.log(response);

        if (!response.output) {
            return res.status(500).json({
                success: false,
                message: "Image generation failed",
                errorDetails: response
            });
        }

        if (response.ok && imageUrl && imageUrl.output) {

            console.log("Success! Image URL:", result.output);

            return res.status(200).json({
                success: true,
                photo:imageUrl.output
            });
        } 

        else {
            console.error("API success but no output:", imageUrl);
            return res.status(500).json({
                success: false,
                message: "API did not return an image URL",
                details: imageUrl
            });
        }

        // res.status(201).json({
        //     success: true,
        //     photo: imageUrl.output
        // })

    }
    catch (error) {
        console.log(error)
        res.status(500).send(error.error);
    }
});

export default router;