const API_PATH = '/api';

export const VERSIONS = {
  V1: '/v1',
};

export const API = Object.keys(VERSIONS).reduce((acc, key) => {
  acc[key] = `${API_PATH}${VERSIONS[key]}`;
  return acc;
}, {});

export const METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export const HEADERS = {
  AUTHORIZATION: 'Authorization',
  CONTENT_TYPE: 'Content-Type',
};

export const CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json',
};

export const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const PATHS = {
  ROOT: '/',
  ALL: '/',
  STORE: '/',
  ID: '/:id',
  EDIT: '/edit/:id',
  REGISTER: '/register',
  AUTHENTICATE: '/authenticate',
  PROFILE: '/profile',
  LOGOUT: '/logout',
  RESTORE: '/restore/:id',
  DELETED: '/deleted',
  DELETE: '/delete/:id',
  FORCE_DELETE: '/forceDelete/:id',
  EMAIL_OTP: '/emailOTP',
  CHANGE_PASSWORD: '/changePassword/:id',
  RESTORE_PASSWORD: '/resetPassword',
};

export const STATUSCODE = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLYHINTS: 103,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  AMBIGUOUS: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED: 421,
  UNPROCESSABLE_ENTITY: 422,
  FAILED_DEPENDENCY: 424,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  ZERO: 0,
  ONE: 1,
  NEGATIVE_ONE: -1,
};
