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

  EXISTS: {
    USER: "User already exist!",
    EMAIL: "Email is already exist!",
    EMAIL_GUEST:
      "It looks like you've ordered with us before! Click 'Forgot Password' to reset your password.",
    COUPON: "This coupon code already exist!",
    SLUG: "This slug already exist!",
    CONTACT: "Mobile number is already exist!",
    USERNAME: "Username is already exist!",
    TITLE: "This title already exist",
    EMAIL_ALREADY_EXISTS:
      "This email is already registered with another customer!",
    PRICE_RANGE: "This price range already exists",
    LIST_TYPE: "This list type already exists",
    FIRSTNAME: "firstname is already exist!",
    LASTNAME: "lastname is already exist!",
    FULLNAME: "fullname is already exist!",
  },
  NOT_FOUND: {
    USER: "Your email address is not available in our system!",
    ROLES: "Role is not available in our system!",
    EMAIL: "Your email address is not available in our system!",
    IMAGE: "Image not available.",
    ACCOUNT: "We can't find this account",
    USER_LOOKUP: "User is not available in our system!",
    CATEGORYS: "category is not available in our system!",
    PRODUCTS: "product is not available in our system!",
    PRODUCT_REVIEWS: "product_review is not available in our system!",
    PRODUCT_IMAGES: "product_image is not available in our system!",
    CUSTOMER: "Plese enter valid data",
    MODULES: "Module is not available in our system!",
    INCOME: "income is not available in our system!",
    EXPENSES: "expenses is not available in our system!",
    PRODUCT: {
      PRODUCT: "Product is not available in our system!",
    },
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
  IN_USE: {
    CATEGORY: "This category is being used by other modules !",
    PRODUCT: "This product is being used by other modules !",
  },
  USER: {
    PROFILE_UPDATED: "Your profile has been updated successfully.",
    PROFILE_IMAGE_UPDATED: "Your profile image has been updated successfully.",
    PROFILE_DELETED: "Your profile has been deleted successfully.",
    NOT_VERIFIED: "Your email address is not verified.",
    INACTIVE: "Your email address is not active.",
    INVALID: "Please enter valid email & password.",
  },
  CUSTOMER: {
    CUSTOMER_NOT_FOUND: "Customer not found.",
    CUSTOMER_UPDATED: "Your customer has been updated successfully.",
    CUSTOMER_ADDED: "Your customer has been added successfully",
    CUSTOMER_DELETED: "Your customer has been deleted successfully",
    CUSTOMER_UPDATED_PROFILE:
      "Your customer profile and password has been updated successfully",
    INACTIVE: "Your email address is not active.",
    INVALID: "Please enter valid email & password.",
  },

  ROLE: {
    ADDED: "Role has been added successfully.",
    UPDATED: "Role has been updated successfully.",
    DELETED: "Role has been deleted successfully."
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
  },
  USERS: {
    ADDED: "user has been added successfully",
    UPDATED: "user has been updated successfully",
    DELETED: "user has been deleted successfully",
    LOG_OUT: "user have successfully logout",
  },
  CATEGORYS: {
    ADDED: " category has been added successfully",
    UPDATED: " category has been updated successfully",
    DELETED: " category has been deleted successfully",
  },
  PRODUCTS: {
    ADDED: "product has been added successfully",
    UPDATED: "product has been updated successfully",
    DELETED: "product has been deleted successfully",
  },
  PRODUCT_REVIEWS: {
    ADDED: "product_review has been added successfully",
    UPDATED: "product_review has been updated successfully",
    DELETED: "product_review has been deleted successfully",
  },
  PRODUCT_IMAGES: {
    ADDED: "product_image has been added successfully",
    UPDATED: "product_image has been updated successfully",
    DELETED: "product_image has been deleted successfully",
  },
  CUSTOMERS: {
    ADDED: "customer has been added successfully",
    UPDATED: "customer has been updated successfully",
    DELETED: "customer has been deleted successfully",
  },
  MODULES: {
    ADDED: "Module has been added successfully",
    UPDATED: "Module has been updated successfully",
    DELETED: "Module has been deleted successfully",
  },
  VALIDATION: {
    REQUIRED: {
      CONFIRM_PASSWORD: "Please enter confirm password.",
      CURRENT_PASSWORD: "Please enter current password.",
      FIRST_NAME: "Please enter first name.",
      LAST_NAME: "Please enter last name.",
      FULL_NAME: "Please enter fullname.",
      TITLE: "Please enter title.",
      CONFIG_KEY: "Please enter configuration key.",
      CONFIG_VALUE: "Please enter configuration value.",
      CONFIG_SMTP:
        "Please enter port and server detail only for the emailSmtpDetail configuration.",
      RESET_TOKEN: "Please enter reset token.",
      USER_ID: "Please enter user id",
      USERNAME: "Please enter username.",
      TYPE: "Please enter clock type",
      START_DATE: "Please enter week start date",
      END_DATE: "Please enter week end date",
      ITEMS_PER_PAGE: "Per page is required",
      CURRENT_PAGE: "Current page is required",
      CUSTOMER_ID: "Missing customer id",
      CUSTOMER_TYPE: "Missing customer type",
      KEYWORD: "Missing search keyword",
      ORDER_TRANSACTION_ID: "Missing transaction id",
      MOBILE_NUMBER: "Please enter valid mobile number",
      USER_ID: "Please enter user ID",
      ADDRESS: "Please enter address",
      ZIP_CODE: "Please enter zip code",
      STATE_ID: "Please enter state ID",
      COUNTRY_ID: "Please enter country ID",
      TABLE: "Please enter table name",
      STATUS: "Please enter valid status",
      ID: "Please enter id",
      LOCAL_PHONE1: "Please enter local phone1",
      EMAIL: "Please enter email",
      CITY: "Please enter city",
      COUNTRY: "Please enter country",
      STATE: "Please enter state",
      RESOURCES: "Please enter valid resources",
      INVALID_EMAIL: "Please enter valid resources",
      ROLE: {
        ID: "Please enter role",
        TITLE: "Please enter role name",
        STATUS: "Please enter role status",
        DEFAULT_ROLE: "You can not delete default Role",
      },
      PRODUCT: {
        PRODUCT_ID: "Please enter product id",
        RATING: "Please enter rating",
        REVIEW_ID: "Please enter review id",
      },
    },
    VALID: {
      USERNAME: "Please enter valid username.",
      EMAIL: "Please enter valid email address.",
      PASSWORD: "Please enter valid password.",
      ROLE_ID: "Please enter role ID.",
      STATUS: "Please enter valid status.",
      TOKEN: "Please enter valid token.",
      IDENTITY_TOKEN: "Please enter valid identity token.",
      MODULE: "Please enter valid module",
      IMAGE_FILE_TYPE: "Only support jpeg,jpg,png,gif image types",
    },
    SUPER_ADMIN: {
      NOT_DELETE: "You can not delete this admin",
    },
    SUPER_USER: {
      NOT_DELETE: "You can not delete this users",
    },
    LENGTH: {
      USERNAME_MIN: "Username must be minimum of 4 character long.",
      USERNAME_MAX: "Username must be maximum of 16 character long.",
      PASSWORD: "Password must be minimum of 8 character long.",
    },
    EXISTS: {
      ROLE: "There is already one role with Same name",
      DELIVERY_MATRIX: "There is already similar delivery matrix",
    },
  },
};

/// File Path
exports.PATHS = {
  IMAGES: {
    IMAGES: "/Images",
    USERS: "/Users",
    CUSTOMERS: "/Customers",
    PRODUCTS: "/Products",
    PRODUCT_IMAGE: "/product_image",
  },

  VIDEOS: "/videos",
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

// User type
exports.ROLE_TYPES = {
  USER: "user",
  CUSTOMER: "customer",
};

// Role Permission
exports.ACCESS_TYPES = {
  READ: "read_access",
  WRITE: "write_access",
  DELETE: "delete_access",
};
//Role Modules
exports.MODULES = {
  CATEGORY: "Categories",
  USERS: "Users",
  CUSTOMER: "Customers",
  MODULE: "Modules",
  PERMISSIONS: "permissions",
  PRODUCT_REVIEWS: "Product reviews",
  PRODUCT: " Products",
  ROLES: "Roles",
  PRODUCT_IMAGES: "Product_image",
  CUSTOMER_TOKENS: "Customer_tokens",
};
exports.CUSTOMER_TYPE = {
  NORMAL: "normal",
  PRO: "pro",
};
