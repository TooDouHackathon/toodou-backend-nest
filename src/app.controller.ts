import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

const formatUpTime = (value) => {
  function pad(s) {
    return (s < 10 ? '0' : '') + s
  }
  const hours = Math.floor(value / (60 * 60))
  const minutes = Math.floor((value % (60 * 60)) / 60)
  const seconds = Math.floor(value % 60)
  return `Backend service has been running for: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}, everything is fine!`
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/heartbeat')
  heartbeat() {
    return formatUpTime(process.uptime())
  }
}
