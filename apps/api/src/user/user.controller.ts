import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description:
      'It creates a new user, and returns the User entity. Password will be automatically hashed.',
    type: User,
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'This error happens, when a credential is taken.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description:
      'List of all user, returns an array of User entity. When it is no user in database, returns an empty array.',
    type: [User],
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Find an user by ID, and returns an User entity.',
    type: User,
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description:
      'This error happens, when user not found with the given id in the database.',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'It updates an user, and returns the user entity',
    type: User,
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description:
      'This error happens, when user not found with the given id in the database.',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Delete an user with the given id.',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description:
      'This error happens, when user not found with the given id in the database.',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
