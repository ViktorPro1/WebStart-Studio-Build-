const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['scripts/init/app.js'], // твій головний модуль
    bundle: true,
    outfile: 'scripts/dist/bundle.js',    // зібраний файл
    format: 'iife',                       // самовикликаючий скрипт
    target: ['es2015'],                   // сучасна ціль, підтримка const/let
    minify: true,
    sourcemap: true                       // додатково можна для дебагу
}).then(() => {
    console.log('✅ Bundle створено: scripts/dist/bundle.js');
}).catch((err) => {
    console.error('❌ Помилка при збірці:', err);
    process.exit(1);
});
