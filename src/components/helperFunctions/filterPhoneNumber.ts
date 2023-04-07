const filterPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.replaceAll(" ", "");

  if (phoneNumber.startsWith("0")) {
    phoneNumber = phoneNumber.substring(1);
  }

  if (!phoneNumber.startsWith("+91")) {
    phoneNumber = "+91" + phoneNumber;
  }

  return phoneNumber;
};

export default filterPhoneNumber;
