module.exports = {
  apps: [{
    name: 'Purchase-Proxy',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-237-174.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/PetsyPersonal.pem',
      ref: 'origin/master',
      repo: 'github.com:austinStotts/Purchase-Proxy.git',
      path: '/home/ubuntu/Purchase-Proxy',
      'post-deploy': 'npm run start && pm2 startOrRestart ecosystem.config.js'
    }
  }
}