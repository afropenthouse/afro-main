

// Ensure this is set in your environment
const backendUrl = "https://backend-vibeazy.fly.dev";
// Function to handle the proxy logic
async function proxyRequest(req, method) {
  const url = backendUrl + req.nextUrl.pathname.replace('/api/backend', '');
  const headers = Object.fromEntries(req.headers.entries());
  delete headers.host;
  const response = await fetch(url, {
    method,
    headers,
    body: method!== 'GET' && method!== 'HEAD'? await req.text() : undefined,
  });
  if (response.ok) {
    const json = await response.json();
    return new response(JSON.stringify(json), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new response(null, {
      status: response.status,
    });
  }
}
// Export named functions for each HTTP method
export async function GET(request) {
  return await proxyRequest(request, 'GET');
}
export async function POST(request) {
  return await proxyRequest(request, 'POST');
}
export async function PUT(request) {
  return await proxyRequest(request, 'PUT');
}
export async function PATCH(request) {
  return await proxyRequest(request, 'PATCH');
}
export async function DELETE(request) {
  return await proxyRequest(request, 'DELETE');
}