export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/contact_240701a9.mjs').then(n => n.c);

export { page };
