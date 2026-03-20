export async function GET() {
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,hyperliquid&vs_currencies=usd&include_24hr_change=true",
            { next: { revalidate: 60 } }
        );
        if (!res.ok) {
            return Response.json({}, { status: res.status });
        }
        const data = await res.json();
        return Response.json(data);
    } catch {
        return Response.json({}, { status: 500 });
    }
}
