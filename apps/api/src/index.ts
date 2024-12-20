/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { hc } from 'hono/client';
import { cors } from 'hono/cors';
import { db } from 'db';
// import { schema } from 'db/schema';

const app = new Hono();

const route = app
	.use(cors())
	.post(
		'/posts',
		zValidator(
			'form',
			z.object({
				title: z.string(),
				body: z.string(),
			})
		),
		(c) => {
			return c.json(
				{
					ok: true,
					message: 'Created!',
				},
				201
			);
		}
	)
	.get('/users', (c) => {


		return c.json(
			{
				ok: true,
				message: 'Hello, World!',
			},
			200
		);
	});

export type AppType = typeof route;

export const client = hc<AppType>('http://localhost:8787/');

export default {
	fetch: app.fetch,
} satisfies ExportedHandler<Env>;
