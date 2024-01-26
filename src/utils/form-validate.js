export const usernameValidate = {
  required: {
    value: true,
    message: "Please enter username",
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: "Username must be alphanumeric",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Please enter an email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Please enter password",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
};

export const captionValidate = {
  required: {
    value: true,
    message: "Please enter caption",
  },
  maxLength: {
    value: 30,
    message: "Caption must be at most 30 characters long",
  },
};

export const picValidate = {
  required: {
    value: true,
    message: "Please choose picture",
  },
};
