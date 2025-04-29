import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	const { name, email, subject, message } = await req.json();


	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.SMTP_USER,
			subject: subject || 'Mensagem do formulário de contato',
			html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ success: false }), { status: 500 });
	}
}
