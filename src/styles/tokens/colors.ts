import {
  violetDark,
  cyanDark,
  grayDark,
  blackA,
  whiteA
} from "@radix-ui/colors";

const base = {
  "black-01": blackA.blackA1,
  "black-02": blackA.blackA2,
  "black-03": blackA.blackA3,
  "black-04": blackA.blackA4,
  "black-05": blackA.blackA5,
  "black-06": blackA.blackA6,
  "black-07": blackA.blackA7,
  "black-08": blackA.blackA8,
  "black-09": blackA.blackA9,
  "black-10": blackA.blackA10,
  "black-11": blackA.blackA11,
  "black-12": blackA.blackA12,

  "white-01": whiteA.whiteA1,
  "white-02": whiteA.whiteA2,
  "white-03": whiteA.whiteA3,
  "white-04": whiteA.whiteA4,
  "white-05": whiteA.whiteA5,
  "white-06": whiteA.whiteA6,
  "white-07": whiteA.whiteA7,
  "white-08": whiteA.whiteA8,
  "white-09": whiteA.whiteA9,
  "white-10": whiteA.whiteA10,
  "white-11": whiteA.whiteA11,
  "white-12": whiteA.whiteA12
};

const text = {
  "text-contrast-high": grayDark.gray12,
  "text-contrast-low": grayDark.gray11,
  "text-black": blackA.blackA12,
  "text-white": whiteA.whiteA12
};

const primary = {
  "primary-01": cyanDark.cyan1,
  "primary-02": cyanDark.cyan2,
  "primary-03": cyanDark.cyan3,
  "primary-04": cyanDark.cyan4,
  "primary-05": cyanDark.cyan5,
  "primary-06": cyanDark.cyan6,
  "primary-07": cyanDark.cyan7,
  "primary-08": cyanDark.cyan8,
  "primary-09": cyanDark.cyan9,
  "primary-10": cyanDark.cyan10,
  "primary-11": cyanDark.cyan11,
  "primary-12": cyanDark.cyan12
};

const secondary = {
  "secondary-01": violetDark.violet1,
  "secondary-02": violetDark.violet2,
  "secondary-03": violetDark.violet3,
  "secondary-04": violetDark.violet4,
  "secondary-05": violetDark.violet5,
  "secondary-06": violetDark.violet6,
  "secondary-07": violetDark.violet7,
  "secondary-08": violetDark.violet8,
  "secondary-09": violetDark.violet9,
  "secondary-10": violetDark.violet10,
  "secondary-11": violetDark.violet11,
  "secondary-12": violetDark.violet12
};

const terciary = {
  "gray-01": grayDark.gray1,
  "gray-02": grayDark.gray2,
  "gray-03": grayDark.gray3,
  "gray-04": grayDark.gray4,
  "gray-05": grayDark.gray5,
  "gray-06": grayDark.gray6,
  "gray-07": grayDark.gray7,
  "gray-08": grayDark.gray8,
  "gray-09": grayDark.gray9,
  "gray-10": grayDark.gray10,
  "gray-11": grayDark.gray11,
  "gray-12": grayDark.gray12
};
const colors = {
  ...base,
  ...primary,
  ...secondary,
  ...terciary,
  ...text
};

export { colors };
