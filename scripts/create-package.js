#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const packageName = process.argv[2]

if (!packageName) {
  console.error('Usage: npm run create-package <package-name>')
  process.exit(1)
}

if (!/^[a-z][a-z0-9-]*$/.test(packageName)) {
  console.error('Package name must be lowercase and contain only letters, numbers, and hyphens')
  process.exit(1)
}

const packageDir = path.join(__dirname, '../packages', packageName)

if (fs.existsSync(packageDir)) {
  console.error(`Package ${packageName} already exists`)
  process.exit(1)
}

console.log(`Creating package: @codex/${packageName}`)

// Create package directory structure
fs.mkdirSync(packageDir, { recursive: true })
fs.mkdirSync(path.join(packageDir, 'src'))

// Create package.json
const packageJson = {
  name: `@codex/${packageName}`,
  version: '1.0.0',
  main: 'dist/index.js',
  types: 'dist/index.d.ts',
  scripts: {
    build: 'tsc -p tsconfig.json',
    test: 'mocha src/**/*.test.ts --require ts-node/register',
    'test:watch': 'mocha src/**/*.test.ts --require ts-node/register --watch',
    dev: 'tsc -p tsconfig.json --watch'
  },
  dependencies: {},
  devDependencies: {}
}

fs.writeFileSync(
  path.join(packageDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
)

// Create tsconfig.json
const tsConfig = {
  extends: '../../tsconfig.json',
  compilerOptions: {
    rootDir: 'src',
    outDir: 'dist'
  },
  include: ['src']
}

fs.writeFileSync(
  path.join(packageDir, 'tsconfig.json'),
  JSON.stringify(tsConfig, null, 2)
)

// Create basic index.ts
const indexContent = `export function hello() {
  return 'Hello from @codex/${packageName}!'
}
`

fs.writeFileSync(path.join(packageDir, 'src', 'index.ts'), indexContent)

// Create basic test file
const testContent = `import { expect } from 'chai'
import { hello } from './index'

describe('@codex/${packageName}', () => {
  it('should return hello message', () => {
    const result = hello()
    expect(result).to.equal('Hello from @codex/${packageName}!')
  })
})
`

fs.writeFileSync(path.join(packageDir, 'src', 'index.test.ts'), testContent)

console.log(`✅ Package @codex/${packageName} created successfully!`)
console.log(`\nNext steps:`)
console.log(`1. cd packages/${packageName}`)
console.log(`2. npm run build`)
console.log(`3. Start developing in src/index.ts`)

// Bootstrap with Lerna to link dependencies
try {
  console.log('\n🔗 Bootstrapping workspace...')
  execSync('npx lerna bootstrap', { stdio: 'inherit', cwd: path.join(__dirname, '..') })
  console.log('✅ Workspace bootstrapped!')
} catch (error) {
  console.warn('⚠️  Failed to bootstrap workspace. Run `npx lerna bootstrap` manually.')
}