const excerpt = (string) => {
  const limit = 150;
  string = string.charAt(0).toUpperCase() + string.slice(1);
  const lastSpace = string.slice(0, limit).lastIndexOf(' ');
  const excerpt = string.slice(0, lastSpace) + ' ...';
  return string.length > limit ? excerpt : string;
};

export default excerpt;
