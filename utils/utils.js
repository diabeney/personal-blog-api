const VALIDATIONS = {
  shouldNotBeEmptyString: /^\s*\S.*\S\s*$/
};

function validInput(value) {
  if (!value) return false;
  return VALIDATIONS.shouldNotBeEmptyString.test(value);
}

const STATUS = {
  CREATED: {
    code: 201,
    message: "Successfully Created"
  },
  BAD_REQUEST: {
    code: 400,
    message: "Bad Request"
  },
  UNAUTHORIZED: {
    code: 401,
    message: "Provide Authentication credentials"
  },
  NOT_FOUND: {
    code: 404,
    message: "Not Found"
  },
  SERVER_ERROR: {
    code: 500,
    message: "Internal Server Error"
  }
};

const isTruthyValue = (value) => (value ? "truthy" : "falsy");

const validateReqObj = (obj, fields) => {
  const objFields = Object.keys(obj);
  const isNotValid = objFields.some((field) => fields.indexOf(field) < 0 || !validInput(obj[field]));
  if (isNotValid) {
    return new Error("Bad Request");
  }
  return obj;
};

export { validInput, isTruthyValue, STATUS, validateReqObj };
