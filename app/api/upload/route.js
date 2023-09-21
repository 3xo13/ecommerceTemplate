import {S3, S3Client, PutObjectCommand, GetObjectCommand} from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();
import {NextResponse} from 'next/server';
import imageUploader from "@/functions/imageUpload";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

const s3Client = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

const POST = async (request) => {
    try {
        const req = await request.formData();
        const file = req.get('file');
        const result = await imageUploader(file);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({error})
    }
    // if (!file) {
    //     return NextResponse.json({success: false})
    // }
    // const bytes = await file.arrayBuffer()
    // const buffer = Buffer.from(bytes)
    // try {

    //     const fileExtension = file
    //         .type
    //         .split('/')[1];
    //     const key = `uploads/${new Date().getTime()}.${fileExtension}`

    //     const params = {
    //         Bucket,
    //         Key: key,
    //         Body: buffer
    //     };
    //     const uploadCommand = new PutObjectCommand(params);

    //     try {
    //         await s3Client.send(uploadCommand);
    //         const fileUrl = `https://${Bucket}.s3.${region}.amazonaws.com/${key}`;
    //         return NextResponse.json(
    //             {success: true, message: 'File uploaded successfully', fileUrl}
    //         )
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json(
    //             {success: false, message: 'Error uploading file to S3'}
    //         )
    //     }
    // } catch (error) {
    //     return NextResponse.json({error})
    // }
}

module.exports = {
    POST
}
