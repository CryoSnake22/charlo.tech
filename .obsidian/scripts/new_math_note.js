module.exports = async (tp) => {
  const fileName = tp.system.prompt("Enter Note Name");
  const filePath = `01 Areas/Mathematics/FactVault/${fileName}`;
  await tp.file.create_new(tp.file.find_tfile("math_note"), filePath, false);
};
