export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_1bf016cc.mjs').then(n => n.b);

export { page };
