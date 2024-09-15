const toFormData = (values) => {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v, index) => formData.append(`${key}[${index}]`, v));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

export { toFormData };

