module.exports = {
  apps: [
    {
      name: 'Contemporary_Creativity',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
