import {S3, S3Client, PutObjectCommand, GetObjectCommand} from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();
import {NextResponse} from 'next/server';

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

const imageUploader = async (file) => {
    // const data = await req.formData();
    // const file = req;
    console.log("🚀 ~ file: imageUpload.js:22 ~ imageUploader ~ file:", file)
    if (!file) {
        return {success: false}
    }
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    try {

        const fileExtension = file
            .type
            .split('/')[1];
        const key = `uploads/${new Date().getTime()}.${fileExtension}`

        const params = {
            Bucket,
            Key: key,
            Body: buffer
        };
        const uploadCommand = new PutObjectCommand(params);

        try {
            await s3Client.send(uploadCommand);
            const fileUrl = `https://${Bucket}.s3.${region}.amazonaws.com/${key}`;
            return (
                {success: true, message: 'File uploaded successfully', fileUrl}
            )
        } catch (error) {
            console.error(error);
            return (
                {success: false, message: 'Error uploading file to S3'}
            )
        }
    } catch (error) {
        return ({error})
    }
}

export default imageUploader
