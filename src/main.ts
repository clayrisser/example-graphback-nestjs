/**
 * File: /src/main.ts
 * Project: example-nestjs
 * File Created: 16-07-2021 21:16:03
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 25-07-2021 05:11:57
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

import 'reflect-metadata';
import { start } from '~/bootstrap';

(async () => {
  await start();
})();
