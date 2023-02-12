const webp = require("webp-converter");
webp.grant_permission();
//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option)

const testFolder = "./public/chocolate";
const fs = require("fs");

fs.readdirSync(testFolder).forEach((file) => {
  const oldFile = testFolder + "/" + file;
  const newFile = testFolder + "/" + file.replace("jpg", "webp");
  const result = webp.cwebp(oldFile, newFile, "-q 80", (logging = "-v"));
  result.then((response) => {
    console.log(response);
    if (oldFile.includes(".jpg")) fs.unlinkSync(testFolder + "/" + file);
  });
});
