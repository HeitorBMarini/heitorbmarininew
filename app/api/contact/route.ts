import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, tel } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mariniheitor@gmail.com"], 
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${tel}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}