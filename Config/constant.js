//GLOBAL STATUS
exports.STATUS_CODES = {
  // 1XX INFORMATIONAL
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  // 2XX SUCCESS
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  // 4XX CLIENT ERROR
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  VALIDATION_ERROR: 422,
  NOT_VALID_DATA: 422,

  // 5XX SERVER ERROR
  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
};

//GLOBAL MESSAGES
exports.STATUS_MESSAGES = {
  SERVER_ERROR: "Internal server error! Please try again.",
  VERIFICATION_EMAIL_SENT:
    "We have sent you an verification email to your account",
  EMAIL_VERIFIED: "Your account has been verified successfully.",
  EMAIL_VERIFIED_ALREADY: "Your account is already verified.",
  REGISTER_SUCCESS: "You have successfully signed up.",
  LOGIN_SUCCESS: "You have successfully logged in.",
  IMAGE_SUCCESS: "Your image has been successfully saved.",
  RESET_PASSWORD_ALREADY:
    "You already have reset the password with this token.",

  NOT_FOUND: {
    USER: "Your email address is not available in our system!",
    EMAIL: "Your email address is not available in our system!",
    IMAGE: "Image not available.",
    ACCOUNT: "We can't find this account",
    INCOME: "income is not available in our system!",
    EXPENSES: "expenses is not available in our system!",
  },
  PASSWORD: {
    MISMATCH: "Provided password do not match",
    TOO_SIMPLE: "Please create more complicated password",
    INCORRECT: "Password incorrect",
    NOT_MATCH: "Password and confirm password are not match",
    CHANGED: "Password has been changed successfully",
    CURRENT_PASSWORD_MISMATCH: "Current password does not match.",
  },
  PROCESS: {
    EMAIL_SENT: "We have sent email to your account",
    EMAIL_SENT_ACCOUNT: "We have sent email to %s",
  },
  OTP: {
    INVALID: "Incorrect OTP.",
    EXPIRE: "OTP is expired. Please try again.",
    CORRECT: "OTP has been matched.",
  },
  CONTACT_US_PROCESS: {
    EMAIL_SENT: "Your email has been sent successfully",
  },
  TOKEN: {
    INVALID: "Your token is not valid.",
    EXPIRED: "Your token has been expired.",
    LOGOUT: "You have been successfully logged out.",
  },
  USER: {
    PROFILE_UPDATED: "Your profile has been updated successfully.",
    PROFILE_IMAGE_UPDATED: "Your profile image has been updated successfully.",
    PROFILE_DELETED: "Your profile has been deleted successfully.",
    NOT_VERIFIED: "Your email address is not verified.",
    INACTIVE: "Your email address is not active.",
    INVALID: "Please enter valid email & password.",
  },
  INCOME: {
    ADDED: "income has been added successfully.",
    UPDATED: "income has been updated successfully.",
    DELETED: "income has been deleted successfully."
  },
  EXPENSES: {
    ADDED: "expenses has been added successfully.",
    UPDATED: "expenses has been updated successfully.",
    DELETED: "expenses has been deleted successfully."
  }
};

// Generic Status
exports.STATUS = {
  INACTIVE: 0,
  ACTIVE: 1,
  DELETED: 1,
  APPROVE: 3,
  REJECTED: 4,
  COMPLETED: 5,
  NOTDELETED: 0,
  ISDEFAULT: 1,
};
