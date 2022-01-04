/**
 * File: /src/bootstrap/logger.ts
 * Project: example-nestjs
 * File Created: 04-01-2022 05:00:58
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 04-01-2022 10:12:04
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021 - 2022
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

import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { Logger } from "nestjs-pino";

export function registerLogger(
  app: NestExpressApplication | NestFastifyApplication
) {
  const logger = app.get(Logger);
  // @ts-ignore
  logger.setLogLevels = (_levels: string[]) => {
    return null;
  };
  app.useLogger(logger);
}
