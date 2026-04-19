# release-approval-test-repo

Repositorio de prueba para la demo de la PoC de aprobación automática de releases.

## Propósito

Este repo existe para demostrar que el sistema de aprobación puede:
1. Validar que un PR existe en GitHub
2. Calcular automáticamente la cobertura de pruebas desde el CI

## Tests

```bash
npm install
npm run test:coverage
```

## Cobertura esperada

≥ 80% en líneas, funciones, ramas y statements.
