export const LAZY_ROUTES_REGISTRY = [
  {
    path: 'guidance',
    loadChildren: () => import('@guidance')
      .then((mod) => mod.GuidanceModule)
  }
];
