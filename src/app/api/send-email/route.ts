import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	const { email, telefone } = await req.json();

	if (!email) {
		return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 });
	}

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_USER,
		to: process.env.SMTP_USER,
		subject: 'Solicitação de número do WhatsApp',
		text: `Solicitação via site:

			Email: ${email}
			Telefone (opcional): ${telefone || 'Não informado'}
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Erro ao enviar:', error);
		return NextResponse.json({ error: 'Falha ao enviar o e-mail' }, { status: 500 });
	}
}
