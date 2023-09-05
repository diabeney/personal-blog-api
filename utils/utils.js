const VALIDATIONS = {
  shouldNotBeEmptyString: /^\s*\S.*\S\s*$/,
};

function validInput(value) {
  if (!value) return false;
  return VALIDATIONS.shouldNotBeEmptyString.test(value);
}

const isTruthyValue = (value) => (value ? "truthy" : "falsy");

export { validInput, isTruthyValue };
