import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  @Get()
  getTeams() {
    return 'teams';
  }

  @Get('/:name')
  getTeamById(@Param('name') name: string) {
    return `Hello team ${name}`;
  }

  @Post()
  createTeam(@Body() payload: any) {
    console.log(payload);
  }
}
