import {NextResponse} from 'next/server';
import imageUploader from "@/functions/imageUpload";


const POST = async (request) => {
    try {
        const req = await request.formData();
        const file = req.get('file');
        const result = await imageUploader(file);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({error})
    }

}

module.exports = {
    POST
}
