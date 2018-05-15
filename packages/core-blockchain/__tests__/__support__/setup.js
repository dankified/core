'use strict'

const path = require('path')
const container = require('@arkecosystem/core-container')

exports.setUp = async () => {
  await container.start({
    data: '~/.ark',
    config: path.resolve(__dirname, '../../../core-config/lib/networks/testnet')
  }, {
    exit: '@arkecosystem/core-p2p',
    exclude: ['@arkecosystem/core-blockchain']
  })

  return container
}

exports.tearDown = async () => container.tearDown()
