import React from 'react'

const page = ({ params }: { params: { kejuaraanId: string } }) => {
    console.log(params)
    return (
        <div>page : {params.kejuaraanId} ===</div>
    )
}

export default page