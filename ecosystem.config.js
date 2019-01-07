module.exports = {
  apps: [{
    name: 'Purchase-Proxy',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-180-205.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/petsyPurchase.pem',
      ref: 'origin/master',
      repo: 'https://github.com/ByeEric/Purchase-Proxy.git',
      path: '/home/ubuntu/Purchase-Proxy',
      'post-deploy': 'npm run start && pm2 startOrRestart ecosystem.config.js'
    }
  }
}