export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/_slug__bc492b7b.mjs').then(n => n._);

export { page };
