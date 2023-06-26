import {UserDataType}from '@/types/user'
import {Get,Post} from './api'

export const postLogin = (userData:UserDataType) =>{
    Post(userData,'/AuthResource')
}
  
export const postRegistration = (userData:UserDataType) =>{
    Post(userData,'/registration')
}
  