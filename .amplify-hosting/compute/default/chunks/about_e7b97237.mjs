export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_08f5e75d.mjs').then(n => n.b);

export { page };
