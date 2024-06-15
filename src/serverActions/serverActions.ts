"use server";

export const fileFormDataAction = async (formData: FormData) => {
  const file = formData.get("file");
  console.log("formData file", file);
};

export const jsonObjectDataAction = async (form: string) => {
  const formValues = JSON.parse(form);
  console.log("json file", formValues);
};
