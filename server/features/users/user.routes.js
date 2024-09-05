import { METHODS, READ_WRITE } from '#constants';
import { protectAndPermit } from '#middlewares/auth.middleware';
import UserController from './user.controller.js';

const controller = UserController;
export default [
  {
    path: '/refresh',
    method: METHODS.GET,
    controller: controller.refresh,
  },
  {
    path: '/',
    method: METHODS.GET,
    controller: controller.getALl,
  },
  {
    path: '/',
    method: METHODS.POST,
    controller: controller.register,
  },
  {
    path: '/authenticate',
    method: METHODS.POST,
    controller: controller.authenticate,
  },
  {
    path: '/logout',
    method: METHODS.POST,
    controller: [protectAndPermit(), controller.logout],
  },
  {
    path: '/profile',
    method: METHODS.GET,
    controller: [protectAndPermit(), controller.getProfile],
  },
  {
    path: '/profile',
    method: METHODS.PATCH,
    controller: [protectAndPermit(READ_WRITE), controller.updateProfile],
  },
  {
    path: '/:id',
    method: METHODS.GET,
    controller: controller.getById,
  },
  {
    path: '/:id',
    method: METHODS.PATCH,
    controller: [protectAndPermit(READ_WRITE), controller.update],
  },
  {
    path: '/:id',
    method: METHODS.DELETE,
    controller: [protectAndPermit(READ_WRITE), controller.delete],
  },
];
