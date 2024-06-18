import {AiImageSchema} from "~/server/models/ai-image.schema";
import type {AiImage} from "~/types";
import {VoteSchema} from "~/server/models/vote.schema";

function chooseRandomImagePair(images: Array<AiImage>): {
    image1: AiImage,
    image2: AiImage,
} {
    const numImages = images.length;
    if (numImages < 2) {
        throw new Error("Not enough images to choose from");
    }
    // Choose two random images, not the same
    const index1 = Math.floor(Math.random() * numImages);
    let index2 = index1;
    while (index2 === index1) {
        index2 = Math.floor(Math.random() * numImages);
    }
    return {
        image1: images[index1],
        image2: images[index2]
    }
}

export default defineEventHandler(async () => {
    const aiImages = await AiImageSchema.find({}).lean();
    const votes = await VoteSchema.find({});

    const votesOnImage = new Map<string, number>();

    for (const aiImage of aiImages) {
        const numVotes = votes.filter((vote) => {
            return vote.image_id_1 === aiImage._id || vote.image_id_2 === aiImage._id;
        });
        votesOnImage.set(aiImage._id, votesOnImage.get(aiImage._id) || 0 + numVotes.length);
    }

    const distinctNumVotes = Array.from(new Set(votesOnImage.values()));
    const lowestNumVotes = Math.min(...distinctNumVotes);
    const imagesWithLowestNumVotes = aiImages.filter((aiImage) => {
        return votesOnImage.get(aiImage._id) === lowestNumVotes;
    });

    if (imagesWithLowestNumVotes.length <= 1) {
        // Return two random images from all aiImages
        console.log("Returning two random images");
        return chooseRandomImagePair(aiImages);
    }

    return chooseRandomImagePair(imagesWithLowestNumVotes);
});