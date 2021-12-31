/**
 * File: /src/modules/sofa/sofaErrorHandler.provider.ts
 * Project: example-graphback-nestjs
 * File Created: 24-06-2021 04:03:49
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 31-12-2021 02:10:49
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

import { ErrorHandler } from "sofa-api/express";
import { FactoryProvider } from "@nestjs/common";

export const SOFA_ERROR_HANDLER = "SOFA_ERROR_HANDLER";
const logger = console;

const SofaErrorHandlerProvider: FactoryProvider<ErrorHandler> = {
  provide: SOFA_ERROR_HANDLER,
  useFactory: () => {
    return (errs: readonly any[]) => {
      (errs || []).forEach((err: any) => {
        logger.error(new Error(err));
      });
      return {
        type: "error" as "error",
        status: 500,
        statusMessage: "",
        error: errs[0],
      };
    };
  },
};

export default SofaErrorHandlerProvider;
