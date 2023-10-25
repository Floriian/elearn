import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Role } from 'src/user/entities/roles';
import { Roles } from 'src/decorators/roles.decorator';
import { GetUser } from 'src/auth/decorators/getuser.decorator';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @Roles(Role.ADMIN, Role.TEACHER)
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Post('/join/:inviteCode')
  join(
    @Param(':inviteCode') inviteCode: string,
    @GetUser('email') email: string,
  ) {
    return this.classService.joinClass(inviteCode, email);
  }

  @Post('/leave/:classId')
  leaveClass(
    @Param(':classId') classId: string,
    @GetUser('email') email: string,
  ) {
    return this.classService.leaveClass(+classId, email);
  }

  @Get()
  findAll(@GetUser('email') email: string) {
    return this.classService.findAll(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('email') email: string) {
    return this.classService.findOne(+id, email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
