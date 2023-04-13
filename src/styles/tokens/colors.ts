import { violetDark, cyan, gray, blackA, whiteA } from "@radix-ui/colors";

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
  "text-contrast-high": gray.gray12,
  "text-contrast-low": gray.gray11,
  "text-black": blackA.blackA12,
  "text-white": whiteA.whiteA12
};

const primary = {
  "primary-01": violetDark.violet1,
  "primary-02": violetDark.violet2,
  "primary-03": violetDark.violet3,
  "primary-04": violetDark.violet4,
  "primary-05": violetDark.violet5,
  "primary-06": violetDark.violet6,
  "primary-07": violetDark.violet7,
  "primary-08": violetDark.violet8,
  "primary-09": violetDark.violet9,
  "primary-10": violetDark.violet10,
  "primary-11": violetDark.violet11,
  "primary-12": violetDark.violet12
};

const secondary = {
  "secondary-01": cyan.cyan1,
  "secondary-02": cyan.cyan2,
  "secondary-03": cyan.cyan3,
  "secondary-04": cyan.cyan4,
  "secondary-05": cyan.cyan5,
  "secondary-06": cyan.cyan6,
  "secondary-07": cyan.cyan7,
  "secondary-08": cyan.cyan8,
  "secondary-09": cyan.cyan9,
  "secondary-10": cyan.cyan10,
  "secondary-11": cyan.cyan11,
  "secondary-12": cyan.cyan12
};

const terciary = {
  "gray-01": gray.gray1,
  "gray-02": gray.gray2,
  "gray-03": gray.gray3,
  "gray-04": gray.gray4,
  "gray-05": gray.gray5,
  "gray-06": gray.gray6,
  "gray-07": gray.gray7,
  "gray-08": gray.gray8,
  "gray-09": gray.gray9,
  "gray-10": gray.gray10,
  "gray-11": gray.gray11,
  "gray-12": gray.gray12
};
const colors = {
  ...base,
  ...primary,
  ...secondary,
  ...terciary,
  ...text
};

export { colors };
