const Formatedate = (data) => {
  const d = new Date(data);

  const [month, day, year] = [d.getMonth(), d.getDate(), d.getFullYear()];

  return `${year}-${month}-${day}`;
};

export default Formatedate;
