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
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/auth/decorators/getuser.decorator';

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

  @Get('/list')
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

  @Get('/list/:id')
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

  @Get('/me')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns current user.',
    type: User,
  })
  @ApiUnauthorizedResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'This error happens, when user is not logged in.',
  })
  async me(@GetUser('email') email: string) {
    const findUser = await this.userService.findOneByEmail(email);

    delete findUser.password;
    delete findUser.refreshToken;

    return findUser;
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
