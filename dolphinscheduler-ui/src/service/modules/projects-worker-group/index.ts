/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { axios } from '@/service/service'
import { UpdateProjectWorkerGroupsReq } from "@/service/modules/projects-worker-group/types";

export function queryWorkerGroupsByProjectCode(
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/worker-group`,
    method: 'get'
  })
}

export function assignWorkerGroups(
  data: UpdateProjectWorkerGroupsReq,
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/worker-group`,
    method: 'post',
    data
  })
}