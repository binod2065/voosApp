export async function POST({ params, request }) {
    console.log(params)
    return new Response(
        '<div>binod</div>',
        {status: 200, headers: {'Content-Type': 'text/html'}}
    )
}