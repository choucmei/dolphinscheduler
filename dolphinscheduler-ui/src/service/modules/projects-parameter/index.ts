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
import {
  ListReq,
  ProjectParameterCodeReq,
  ProjectParameterReq,
  UpdateProjectParameterReq
} from './types'

export function queryProjectParameterListPaging(
  params: ListReq,
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter`,
    method: 'get',
    params
  })
}

export function queryProjectParameterByCode(
  projectCode: number,
  code: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter/${code}`,
    method: 'get'
  })
}

export function createProjectParameter(
  data: ProjectParameterReq,
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter`,
    method: 'post',
    data
  })
}

export function updateProjectParameter(
  data: UpdateProjectParameterReq,
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter/${data.code}`,
    method: 'put',
    data
  })
}

export function deleteProjectParameterByCode(
  data: ProjectParameterCodeReq,
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter/delete`,
    method: 'post',
    data
  })
}

export function deleteProjectParameterByCodes(
  data: ProjectParameterCodeReq[],
  projectCode: number
): any {
  return axios({
    url: `/projects/${projectCode}/project-parameter/batch-delete`,
    method: 'post',
    data
  })
}
