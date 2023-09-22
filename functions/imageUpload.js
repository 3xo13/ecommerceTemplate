import {PutObjectCommand} from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();
import s3Client from "@/db/s3Client";


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
