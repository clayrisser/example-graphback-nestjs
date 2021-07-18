/**
 * File: /src/modules/auth/controller.ts
 * Project: example-graphback-nestjs
 * File Created: 24-06-2021 04:03:49
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 18-07-2021 10:08:57
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ApiBody } from '@nestjs/swagger';
import {
  Authorized,
  GrantProperties,
  KeycloakService,
  Resource,
  UserInfo
} from 'nestjs-keycloak';
import { Logger, Controller, Post, Body, Get } from '@nestjs/common';
import { LoginResponseDto, LoginRequestDto } from './dto';

@Resource('auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly keycloakService: KeycloakService) {}

  @Post('login')
  @ApiBody({ type: LoginRequestDto })
  async postLogin(
    @Body() body: LoginRequestDto
  ): Promise<LoginResponseDto | null> {
    const tokens = await this.keycloakService.authenticate(body);
    if (!tokens) return null;
    const userInfo = await this.keycloakService.getUserInfo();
    if (!userInfo) return null;
    return {
      accessToken: tokens.accessToken?.token || '',
      refreshToken: tokens.refreshToken?.token || '',
      userInfo
    };
  }

  @Get('grant')
  async getGrant(): Promise<GrantProperties | null> {
    return (await this.keycloakService.getGrant()) as GrantProperties;
  }

  @Get('userinfo')
  async getUserInfo(): Promise<UserInfo | null> {
    return this.keycloakService.getUserInfo();
  }

  @Get('username')
  async getUsername(): Promise<string | null> {
    return this.keycloakService.getUsername();
  }

  @Get('userid')
  async getUserid(): Promise<string | null> {
    return this.keycloakService.getUserId();
  }

  @Get('roles')
  async getRoles(): Promise<string[]> {
    return (await this.keycloakService.getRoles()) || [];
  }

  @Get('scopes')
  async getScopes(): Promise<string[]> {
    return (await this.keycloakService.getScopes()) || [];
  }
}
