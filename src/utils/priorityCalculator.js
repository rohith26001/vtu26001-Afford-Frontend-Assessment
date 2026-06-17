export const calculatePriority = (views) => {
  if (views >= 400) return "High";
  if (views >= 200) return "Medium";
  return "Low";
};