import { RESEND_API_KEY } from "astro:env/server";
import type { APIRoute } from "astro";
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    /**  Verificamos que sea metodo post y que el header sea un json */
    if(request.method !== 'POST' || !request.headers.get('content-type')?.includes('application/json')) {
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Invalid request' 
        }), { 
            status: 400
         })
    }

    const body = await request.json();
    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `Effortia Web Agencia <sac@email.effortiaweb.com>`,
      to: "sac@effortiaweb.com",
      subject: `Formulario ${body.interes} Effortia Agencia Web - Página web`,
      html: `
      <div style="font-family: Arial, sans-serif; margin: 20px; background-color: #f9f9f9; color: #333;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2c3e50;">Formulario Effortia Agencia Web - Página web</h2>
         
          <p>Hemos recibido la siguiente información:</p>
              <ul style="list-style-type: none; padding: 0;">
                  <li style="padding-bottom:4px;"><strong>Nombre completo:</strong> ${body.nombre}</li>
                  <li style="padding-bottom:4px;"><strong>Correo electrónico:</strong> ${body.email}</li>
                  <li style="padding-bottom:4px;"><strong>Número de celular:</strong> ${body.celular}</li>
                  <li style="padding-bottom:4px;"><strong>Interes:</strong> ${body.interes}</li>
                  <li><strong>Mensaje:</strong> ${body.mensaje}</li>
              </ul>
          </div>
      `,
    });
  
    if (error) {
        return new Response(JSON.stringify({
            success: true,
            message: error.message
        }), {status: 500})
    }

    return new Response(JSON.stringify({
        success: true,
        message: data
    }), {status: 500})
  
}
