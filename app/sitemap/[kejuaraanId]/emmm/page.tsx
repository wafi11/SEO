import { ObjectId } from 'bson';
import React from 'react'
import { encodeObjectId } from '@/utils';

const page = () => {
    const exampleId = new ObjectId("663d1d22b90c179e3394983a");
    const shortId = encodeObjectId(exampleId);
    console.log(shortId)
    console.log(exampleId)

    return (
        <div>page</div>
    )
}

export default page