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

export { validInput, isTruthyValue, STATUS };
