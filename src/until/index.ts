export function numberWithCommas(x: any | any, commas = ",") {
  try {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, commas);
  } catch (error) {
    console.log({ error });
    return x.toString();
  }
}

export function numberExponentToLarge(numIn: any) {
  numIn += "";
  var sign = "";
  numIn.charAt(0) == "-" && ((numIn = numIn.substring(1)), (sign = "-"));
  var str = numIn.split(/[eE]/g);
  if (str.length < 2) return sign + numIn;
  var power = str[1];
  if (power == 0 || power == -0) return sign + str[0];

  var deciSp = (1.1).toLocaleString().substring(1, 2);
  str = str[0].split(deciSp);
  var baseRH = str[1] || "",
    baseLH = str[0];

  if (power > 0) {
    if (power > baseRH.length) baseRH += "0".repeat(power - baseRH.length);
    baseRH = baseRH.slice(0, power) + deciSp + baseRH.slice(power);
    if (baseRH.charAt(baseRH.length - 1) == deciSp)
      baseRH = baseRH.slice(0, -1);
  } else {
    let num = Math.abs(power) - baseLH.length;
    if (num > 0) baseLH = "0".repeat(num) + baseLH;
    baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power);
    if (baseLH.charAt(0) == deciSp) baseLH = "0" + baseLH;
  }
  return sign + baseLH + baseRH;
}
