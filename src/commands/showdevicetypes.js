const BaseCommand = require('../BaseCommand')
const { getDeviceTypes } = require('../helpers')
const debug = require('debug')('ios-sim:showdevicetypes')
const os = require('node:os')

class ShowDeviceTypesCommand extends BaseCommand {
  async run () {
    const deviceTypes = getDeviceTypes()
    debug('DEVICETYPES', deviceTypes)

    this.log(await this.output(deviceTypes))
    return deviceTypes
  }

  async output (devicetypes) {
    if (!devicetypes) {
      devicetypes = getDeviceTypes()
    }

    return devicetypes.join(os.EOL)
  }
}

ShowDeviceTypesCommand.description = 'List the available device types'

ShowDeviceTypesCommand.flags = {
  ...BaseCommand.flags
}

module.exports = ShowDeviceTypesCommand
