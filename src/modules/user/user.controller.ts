import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user/:id')
  async getPostById(@Param('id') id: string): Promise<User> {
    return this.userService.user({ id: Number(id) });
  }

  @Get('/user')
  async getPublishedPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    return this.userService.users(params);
  }

  @Post('/user')
  async createDraft(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Put('/user/:id')
  async publishPost(
    @Param('id') id: string,
    @Body() userData: { email?: string; name?: string; password?: string },
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete('/user/:id')
  async deletePost(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
