

export default function validation(schemas, data) {
  let isFormValid = true;

  const validateEmail = (value) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(mailformat))
      return true;
    else
      return false;

  }

  const validatePhoneNumber = (value) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (value.match(phoneno)) {
      return true;
    }
    else
      return false;

  }
  const checkFeilds = (input) => {
    let result = true;
    let value = data[input.name]
    if (input.required && value.trim().length === 0) {
      result = false;
      isFormValid = false
    }
    if (input.minWidth && value.trim().length < input.minWidth) {
      result = false;
      isFormValid = false
    }
    // if (input.name === 'email' && !validateEmail(value)) {
    //   result = false;
    //   isFormValid = false
    // }
    if (input.name === 'phone' && !validatePhoneNumber(value)) {
      result = false;
      isFormValid = false
    }


    return result
  }

  let newInputs = [...schemas];
  newInputs.map(input => (input.isValid = checkFeilds(input)))

  return { outPut: newInputs, isFormValid: isFormValid }
}
