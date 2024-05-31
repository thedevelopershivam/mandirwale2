export default async function GET(req, res) {
    console.log('i am in logout')
    
    // Set the 'Authorization' cookie to empty, with an immediate expiration date
    await res.setHeader('Set-Cookie', 'Authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Lax');

    // Redirect the user to the login page or home page after logging out
    res.redirect('/admin/login');
}